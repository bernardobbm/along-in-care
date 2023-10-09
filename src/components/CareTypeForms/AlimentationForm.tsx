import { Text, View } from 'react-native'
import { DefaultForm } from './DefaultForm'

export function AlimentationForm() {
  return (
    <View>
      <Text className="my-4 font-body text-3xl text-gray-50">Alimentação</Text>
      <DefaultForm />
    </View>
  )
}
