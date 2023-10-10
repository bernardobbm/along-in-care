import { ReactNode } from 'react'
import { View } from 'react-native'

interface TwoColumnFieldFormProps {
  children: ReactNode
}

export function TwoColumnFieldForm({ children }: TwoColumnFieldFormProps) {
  return (
    <View className="my-2 flex-row items-start justify-between">
      {children}
    </View>
  )
}
