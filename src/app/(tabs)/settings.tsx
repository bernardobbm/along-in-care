import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

import { useRouter } from 'expo-router'
import { Header } from '../../components/Header'
import { SettingMenuButton } from '../../components/SettingMenuButton'
import { useAuth } from '../../hooks/useAuth'

export default function Settings() {
  const router = useRouter()

  const { signOut } = useAuth()

  return (
    <View className="h-screen bg-gray-900 px-8 py-2">
      <Header text="Configurações" />

      <View className="h-3/4 justify-between">
        <View className="mt-6 h-48 w-fit justify-between rounded-xl bg-gray-700 px-6 py-5">
          <SettingMenuButton
            onPress={() => router.push('/(stack)/profile')}
            icon={
              <FontAwesome name="user-circle-o" size={30} color="#eaeaea" />
            }
            href="/(stack)/profile"
            text="Perfil"
          />

          <SettingMenuButton
            onPress={() => router.push('/(stack)/patient')}
            icon={
              <FontAwesome5
                name="hand-holding-medical"
                size={30}
                color="#eaeaea"
              />
            }
            href="/(stack)/patient"
            text="Paciente"
          />

          <SettingMenuButton
            onPress={signOut}
            icon={<Ionicons name="exit-outline" size={34} color="#e83f5b" />}
            href="/"
            text="Sair"
            color="danger"
          />
        </View>

        <View className="w-11/12 items-center">
          <SettingMenuButton
            onPress={signOut}
            icon={<Ionicons name="trash" size={28} color="#e83f5b" />}
            href="/"
            text="Excluir conta"
            color="danger"
          />
        </View>
      </View>
    </View>
  )
}
