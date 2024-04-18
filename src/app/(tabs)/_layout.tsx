import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons/'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { NewRegistrationButton } from '../../components/NewRegistrationButton'

export default function TabRoutesLayout() {
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light" backgroundColor="#121215" />

      <Tabs
        sceneContainerStyle={{
          backgroundColor: '#121215',
        }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#eaeaea',
          tabBarInactiveTintColor: '#eaeaea',
          tabBarItemStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },

          tabBarStyle: {
            backgroundColor: '#1C6AA3',
            height: 60,
            margin: 12,
            borderRadius: 15,
            borderColor: 'transparent',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="records"
          options={{
            title: 'Registros',
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                name={focused ? 'file-text' : 'file-text-o'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="newCareForm"
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

        <Tabs.Screen
          name="prescriptions"
          options={{
            title: 'Prescrições',
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <FontAwesome5 name="archive" size={size} color={color} />
              ) : (
                <Feather name="archive" size={size} color={color} />
              ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Configurações',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
