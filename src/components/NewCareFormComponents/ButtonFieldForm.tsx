import { ReactNode } from 'react'
import { View } from 'react-native'

type ButtonFieldFormProps = {
  children: ReactNode
}

export function ButtonFieldForm({ children }: ButtonFieldFormProps) {
  return <View className="mb-10 mt-6 flex-row justify-between">{children}</View>
}
