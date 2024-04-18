import { Text, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components/Header'

export default function Settings() {
  return (
    <View className="h-screen px-8 py-2">
      <Header text="Configurações" />

      <View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-gray-50">Apagar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
