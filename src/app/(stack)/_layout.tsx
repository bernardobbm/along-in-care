import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function StackRoutesLayout() {
  return (
    <View className="flex-1 bg-gray-900 px-8 py-2">
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  )
}
