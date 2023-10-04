import { NavigationContainer } from '@react-navigation/native'

import { LoginRoutes } from './src/routes/login.routes'

export default function App() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}
