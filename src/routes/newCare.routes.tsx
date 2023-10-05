import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NewCare } from '../screens/NewCare'
import { NewCareForm } from '../screens/NewCareForm'

const { Navigator, Screen } = createNativeStackNavigator()

export function NewCareRoutes() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-8">
      <StatusBar style="light" backgroundColor={'#121215'} />

      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="NewCare"
      >
        <Screen name="NewCare" component={NewCare} />
        <Screen name="NewCareForm" component={NewCareForm} />
      </Navigator>
    </SafeAreaView>
  )
}
