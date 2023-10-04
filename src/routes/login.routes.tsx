import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import { AppRoutes } from './app.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function LoginRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Screen name="Login" component={Login} />
      <Screen name="AppHome" component={AppRoutes} />
    </Navigator>
  )
}
