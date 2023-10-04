import { ReactNode } from 'react'
import { View } from 'react-native'

interface FieldFormProps {
  children: ReactNode
}

export function FieldForm({ children }: FieldFormProps) {
  return <View className="my-3">{children}</View>
}
