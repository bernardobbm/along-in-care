import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../components/RegisterForm/Login'
import { Register } from '../components/RegisterForm/Register'
import { SignIn } from '../screens/SignIn'
import { AppRoutes } from './app.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function LoginRoutes() {
  return (
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
    </Navigator>
  )
}
