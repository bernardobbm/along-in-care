import NetInfo from '@react-native-community/netinfo'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect } from 'react'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import {
  RobotoCondensed_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-condensed'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { AppState, AppStateStatus, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContextProvider } from '../contexts/AuthContext'

SplashScreen.preventAutoHideAsync()

export default function AuthRoutesLayout() {
  const [hasLoadedFonts] = useFonts({
    RobotoCondensed_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(!!state.isConnected)
      })
    })
  }, [])

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active')
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  const onLayoutRootView = useCallback(() => {
    if (hasLoadedFonts) {
      SplashScreen.hideAsync()
    }
  }, [hasLoadedFonts])

  if (!hasLoadedFonts) {
    return null
  }

  const client = new QueryClient({
    queryCache: new QueryCache(),
  })

  return (
    <SafeAreaView className="flex-1 bg-gray-900" onLayout={onLayoutRootView}>
      <QueryClientProvider client={client}>
        <NativeBaseProvider>
          <AuthContextProvider>
            <StatusBar style="light" translucent backgroundColor="#1C6AA3" />

            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </AuthContextProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </SafeAreaView>
  )
}
