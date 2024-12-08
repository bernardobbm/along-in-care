import axios, { AxiosError, AxiosInstance } from 'axios'
import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from '../storage/storageAuthToken'
import { AppError } from '../utils/AppError'

type SignOut = () => void

type PromiseType = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: `http://192.168.1.3:3333/`,
}) as APIInstanceProps

let failedQueue: PromiseType[] = []
let isRefreshing = false

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError?.response?.status === 401) {
        if (
          requestError.response.data.message === 'Token inválido.' ||
          requestError.response.data.message === 'Token expirado.'
        ) {
          const { refresh_token } = await storageAuthTokenGet()

          if (!refresh_token) {
            signOut()

            return Promise.reject(requestError)
          }

          const originalRequestConfig = requestError.config

          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({
                onSuccess: (token) => {
                  originalRequestConfig.headers = {
                    Authorization: `Bearer ${token}`,
                  }

                  resolve(api(originalRequestConfig))
                },
                onFailure: (error) => {
                  reject(error)
                },
              })
            })
          }

          isRefreshing = true

          // eslint-disable-next-line no-async-promise-executor
          return new Promise(async (resolve, reject) => {
            try {
              const {
                data: { token, refreshToken },
              } = await api.patch(
                '/token/refresh',
                {},
                {
                  headers: {
                    Authorization: `Bearer ${refresh_token}`,
                  },
                },
              )

              await storageAuthTokenSave({ token, refresh_token: refreshToken })

              if (originalRequestConfig.data) {
                originalRequestConfig.data = JSON.parse(
                  originalRequestConfig.data,
                )
              }

              originalRequestConfig.headers = {
                Authorization: `Bearer ${token}`,
              }

              api.defaults.headers.common.Authorization = `Bearer ${token}`

              failedQueue.forEach((request) => {
                request.onSuccess(token)
              })

              resolve(api(originalRequestConfig))
            } catch (err) {
              if (err instanceof AxiosError) {
                failedQueue.forEach((request) => {
                  request.onFailure(err)
                })

                signOut()
                return reject(err)
              }

              throw err
            } finally {
              isRefreshing = false
              failedQueue = []
            }
          })
        }
        signOut()
      }

      if (requestError.response && requestError.response.data.message) {
        return Promise.reject(new AppError(requestError.response.data.message))
      } else {
        return Promise.reject(
          new AppError('Erro no servidor. Tente novamente mais tarde.'),
        )
      }
    },
  )

  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
}

export { api }
