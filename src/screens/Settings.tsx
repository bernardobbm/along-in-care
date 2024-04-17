import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/Header'

export function Settings() {
  return (
    <SafeAreaView className="h-screen bg-gray-900 px-8">
      <Header text="Configurações" />

      <View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-gray-50">Apagar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
