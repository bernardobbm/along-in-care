import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function StackRoutesLayout() {
  return (
    <View className="flex-1 bg-gray-900 px-8 py-2">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="addPatient" />
        <Stack.Screen name="newRecordForm" />
      </Stack>
    </View>
  )
}
