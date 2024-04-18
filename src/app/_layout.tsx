import { SplashScreen, Stack } from 'expo-router'
import { useCallback } from 'react'

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
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function AuthRoutesLayout() {
  const [hasLoadedFonts] = useFonts({
    RobotoCondensed_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  const onLayoutRootView = useCallback(() => {
    if (hasLoadedFonts) {
      SplashScreen.hideAsync()
    }
  }, [hasLoadedFonts])

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900" onLayout={onLayoutRootView}>
      <StatusBar style="light" translucent backgroundColor="#1C6AA3" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  )
}
