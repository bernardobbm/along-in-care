import { ReactNode } from 'react'
import { View } from 'react-native'

interface RootFormProps {
  children: ReactNode
}

export function RootForm({ children }: RootFormProps) {
  return <View>{children}</View>
}
