import { NavigationContainer } from '@react-navigation/native'

import './src/libs/dayjs'
import { LoginRoutes } from './src/routes/login.routes'

export default function App() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}
