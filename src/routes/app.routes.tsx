import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons/'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

import { NewRegistrationButton } from '../components/NewRegistrationButton'
import { Home } from '../screens/Home'
import { Prescriptions } from '../screens/Prescriptions'
import { Records } from '../screens/Records'
import { Settings } from '../screens/Settings'
import { CareRoutes } from './care.routes'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <View className="flex-1 bg-gray-900">
      <Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#1C6AA3',
            borderColor: 'transparent',
            height: 60,
            margin: 12,
            marginBottom: 15,
            borderRadius: 15,
          },

          tabBarItemStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },

          tabBarActiveTintColor: '#eaeaea',
          tabBarInactiveTintColor: '#eaeaea',
        }}
        initialRouteName="Home"
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="Registros"
          component={Records}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                name={focused ? 'file-text' : 'file-text-o'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="AppNewCare"
          component={CareRoutes}
          options={{
            title: '',
            tabBarIcon: ({ color, size }) => (
              <NewRegistrationButton size={size} color={color} />
            ),
            tabBarStyle: {
              display: 'none',
            },
          }}
        />

        <Screen
          name="Prescrições"
          component={Prescriptions}
          options={{
            tabBarIcon: ({ focused, size, color }) =>
              focused ? (
                <FontAwesome5 name="archive" size={size} color={color} />
              ) : (
                <Feather name="archive" size={size} color={color} />
              ),
          }}
        />

        <Screen
          name="Configurações"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </View>
  )
}
