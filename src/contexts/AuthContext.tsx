/* eslint-disable react-hooks/exhaustive-deps */
import { router } from 'expo-router'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { CaregiverDTO } from '../dtos/CaregiverDTO'
import { api } from '../libs/api'
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from '../storage/storageAuthToken'
import {
  storageCaregiverGet,
  storageCaregiverRemove,
  storageCaregiverSave,
} from '../storage/storageCaregiver'

type AuthContextProviderProps = {
  children: ReactNode
}

type AuthContextDataProps = {
  caregiver: CaregiverDTO
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [caregiver, setCaregiver] = useState({} as CaregiverDTO)

  async function caregiverAndTokenUpdate(
    caregiverData: CaregiverDTO,
    token: string,
  ) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setCaregiver(caregiverData)
  }

  async function storageCaregiverAndTokenSave(
    caregiverData: CaregiverDTO,
    token: string,
    refreshToken: string,
  ) {
    await storageCaregiverSave(caregiverData)
    await storageAuthTokenSave({ token, refresh_token: refreshToken })
  }

  async function signIn(email: string, password: string) {
    const { data } = await api.post('/sessions', { email, password })

    if (data.caregiver && data.token && data.refreshToken) {
      await storageCaregiverAndTokenSave(
        data.caregiver,
        data.token,
        data.refreshToken,
      )
      caregiverAndTokenUpdate(data.caregiver, data.token)
    }
  }

  async function signOut() {
    setCaregiver({} as CaregiverDTO)

    await storageAuthTokenRemove()
    await storageCaregiverRemove()

    while (router.canGoBack()) {
      router.back()
    }

    router.replace('/')
  }

  const loadCaregiverData = async () => {
    const caregiverLogged = await storageCaregiverGet()
    const { token } = await storageAuthTokenGet()

    if (caregiverLogged && token) {
      caregiverAndTokenUpdate(caregiverLogged, token)
    }
  }

  useEffect(() => {
    loadCaregiverData()
  }, [])

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut)

    return () => {
      subscribe()
    }
  }, [signOut])

  return (
    <AuthContext.Provider value={{ caregiver, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
