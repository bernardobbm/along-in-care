import axios, { AxiosInstance } from 'axios'
import { storageAuthTokenSave } from '../storage/storageAuthToken'
import { AppError } from '../utils/AppError'

type SignOut = () => void

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: `http://192.168.1.3:3333/`,
}) as APIInstanceProps

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError?.response?.status === 401) {
        if (requestError.response.data?.message === 'Token inválido.') {
          const {
            data: { token },
          } = await api.patch('/token/refresh')

          await storageAuthTokenSave(token)
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
