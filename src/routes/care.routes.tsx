import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NewCareForm } from '../screens/NewCareForm'

const { Navigator, Screen } = createNativeStackNavigator()

export function CareRoutes() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-8">
      <StatusBar style="light" backgroundColor={'#121215'} />

      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="NewCareForm" component={NewCareForm} />
      </Navigator>
    </SafeAreaView>
  )
}
