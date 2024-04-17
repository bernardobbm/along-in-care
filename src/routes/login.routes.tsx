import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'
import { SignIn } from '../screens/SignIn'
import { AppRoutes } from './app.routes'
import { CareRoutes } from './care.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function LoginRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1c6aa3" />

      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn"
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />

        <Screen name="AppHome" component={AppRoutes} />
        <Screen name="CareRoutes" component={CareRoutes} />
      </Navigator>
    </>
  )
}
