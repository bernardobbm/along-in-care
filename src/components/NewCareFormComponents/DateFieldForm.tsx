import { ReactNode } from 'react'
import { View } from 'react-native'

interface DateFieldFormProps {
  children: ReactNode
}

export function DateFieldForm({ children }: DateFieldFormProps) {
  return (
    <View className="flex-row items-center justify-between">{children}</View>
  )
}
