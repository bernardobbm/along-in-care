import { ReactNode } from 'react'
import { View } from 'react-native'

interface DateFieldFormProps {
  children: ReactNode
}

export function DateFieldForm({ children }: DateFieldFormProps) {
  return (
    <View className="my-2 flex-row items-start justify-between">
      {children}
    </View>
  )
}
