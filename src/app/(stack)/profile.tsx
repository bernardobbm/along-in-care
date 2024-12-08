import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import { Header } from '../../components/Header'
import { HeaderButton } from '../../components/HeaderButton'
import { useGetProfileData } from '../../hooks/useGetProfileData'
import { useRefreshOnFocus } from '../../hooks/useRefetchOnFocus'

export default function Profile() {
  const router = useRouter()
  const { data, refetch } = useGetProfileData()

  useRefreshOnFocus(refetch)

  return (
    <View className="h-screen bg-gray-900">
      <Header
        text="Perfil"
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      />

      <View>
        <Text className="font-body_semibold text-2xl text-gray-50">
          Suas informações:
        </Text>

        <View className="mt-6 space-y-5 rounded-lg bg-gray-700 p-6">
          <View>
            <Text className="font-label text-xl text-gray-50">Nome:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.caregiver.name}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">Sobrenome:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.caregiver.last_name}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">E-mail:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.caregiver.email}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">
              Tipo de cuidador:
            </Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.caregiver.role === 'PRIMARY' ? 'Principal' : 'Auxiliar'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
