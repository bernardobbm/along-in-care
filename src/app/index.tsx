import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'

import { Link, Redirect } from 'expo-router'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export default function SignIn() {
  const { caregiver } = useAuth()

  if (caregiver.name) {
    Redirect({
      href: '/(tabs)',
    })
  }

  return (
    <View className="flex-1 items-center gap-12 bg-gray-900 px-8">
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
        <Link href="/(auth)/register" asChild>
          <Button size="lg">
            <AntDesign name="adduser" size={26} color={'#eaeaea'} />
            <Text className="ml-4 font-body text-lg text-gray-50">
              Cadastre-se
            </Text>
          </Button>
        </Link>

        <Link href="/(auth)/login" asChild>
          <Button size="lg" extraClasses="mt-6">
            <AntDesign name="login" size={25} color={'#eaeaea'} />
            <Text className="ml-4 font-body text-lg text-gray-50">Entre</Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
