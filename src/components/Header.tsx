import { ReactNode } from 'react'
import { Text, View } from 'react-native'

interface HeaderProps {
  children: ReactNode
  text: string
}

export function Header({ children, text }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between py-5">
      <Text className="font-title text-2xl text-gray-50">{text}</Text>
      {children}
    </View>
  )
}
