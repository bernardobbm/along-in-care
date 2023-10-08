import { ReactNode } from 'react'
import { View } from 'react-native'

type ButtonFieldFormProps = {
  children: ReactNode
}

export function ButtonFieldForm({ children }: ButtonFieldFormProps) {
  return <View className="mb-10 flex-row justify-between">{children}</View>
}
