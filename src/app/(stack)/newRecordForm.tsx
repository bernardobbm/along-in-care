import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { Header } from '../../components/Header'
import { HeaderButton } from '../../components/HeaderButton'

export default function NewRecordForm() {
  const router = useRouter()

  return (
    <View className="h-screen bg-gray-900">
      <Header
        text="Criar um novo registro"
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      />
    </View>
  )
}
