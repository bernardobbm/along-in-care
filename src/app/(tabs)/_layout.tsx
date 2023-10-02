import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { NewRegistrationButton } from '../../components/NewRegistrationButton'

export default function Layout() {
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light" backgroundColor="#121215" />

      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#1C6AA3',
            borderTopColor: 'transparent',
            height: 60,
            margin: 10,
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
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',

            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="redirectPage"
          options={{
            title: '',

            tabBarStyle: {
              display: 'none',
            },

            tabBarIcon: ({ size, color }) => (
              <NewRegistrationButton size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="records"
          options={{
            title: 'Registros',

            tabBarIcon: ({ focused, size, color }) =>
              focused ? (
                <FontAwesome5 name="archive" size={size} color={color} />
              ) : (
                <Feather name="archive" size={size} color={color} />
              ),
          }}
        />
      </Tabs>
    </View>
  )
}
