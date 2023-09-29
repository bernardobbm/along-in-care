import { AntDesign } from '@expo/vector-icons'
import { Link, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View } from 'react-native'

import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import {
  RobotoCondensed_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-condensed'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()

export default function Login() {
  const [hasLoadedFonts] = useFonts({
    RobotoCondensed_400Regular,
    Inter_400Regular,
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
    <View
      className="flex-1 items-center gap-12 bg-gray-900"
      onLayout={onLayoutRootView}
    >
      <StatusBar style="auto" backgroundColor="#1c6aa3" />
      <View className="h-[420px] w-[100vw] items-center justify-center gap-y-10 rounded-b-[50px] bg-[#1c6aa3] px-8">
        {/* substituir por ícone */}
        <View
          className="rounded-lg"
          style={{
            backgroundColor: '#fff',
            height: 100,
            width: 100,
          }}
        />

        <Text className="text-center font-body text-lg text-gray-50">
          O Along In Care é o aplicativo certo voltado para o cuidado daqueles
          que você ama
        </Text>
      </View>

      <Text className="text-center font-body text-lg text-gray-50">
        Cadastre-se utilizando uma conta Google já existente
      </Text>

      <Link href={'/(tabs)/home'} asChild>
        <TouchableOpacity
          className="w-fit flex-row items-center gap-x-5 rounded-xl bg-gray-700 px-5 py-3"
          activeOpacity={0.7}
        >
          {/* substituir depois */}
          <AntDesign name="google" size={40} color={'#eaeaea'} />
          <Text className="font-body text-lg text-gray-50">
            Entre com sua conta Google
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
