import { AntDesign } from '@expo/vector-icons'
import { SplashScreen } from 'expo-router'
import { Text, View } from 'react-native'

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
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'

SplashScreen.preventAutoHideAsync()

export function SignIn() {
  const { navigate } = useNavigation()

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
    <View
      className="flex-1 items-center gap-12 bg-gray-900"
      onLayout={onLayoutRootView}
    >
      <View className="h-[420px] w-screen items-center justify-center gap-y-5 rounded-b-[50px] bg-primary px-8">
        <Logo />

        <Text className="text-center font-body text-lg text-gray-50">
          O Along In Care é o aplicativo certo voltado para o cuidado daqueles
          que você ama
        </Text>
      </View>

      <Text className="px-5 text-center font-body text-lg text-gray-50">
        Entre ou cadastre-se utilizando uma conta Google já existente
      </Text>

      <View>
        <Button size="lg" onPress={() => navigate('Register')}>
          <AntDesign name="adduser" size={26} color={'#eaeaea'} />
          <Text className="ml-4 font-body text-lg text-gray-50">
            Cadastre-se
          </Text>
        </Button>

        <Button size="lg" extraClasses="mt-6" onPress={() => navigate('Login')}>
          <AntDesign name="login" size={25} color={'#eaeaea'} />
          <Text className="ml-4 font-body text-lg text-gray-50">Entre</Text>
        </Button>
      </View>
    </View>
  )
}
