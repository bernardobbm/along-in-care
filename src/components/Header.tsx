import { ReactNode } from 'react'
import { Text, View } from 'react-native'

interface HeaderProps {
  text: string
  button?: ReactNode
  children?: ReactNode
}

export function Header({ children, text, button }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between py-5">
      <View className="flex-row items-center">
        {button}
        <Text
          className={`font-body_semibold text-2xl text-gray-50 ${
            button ? 'ml-6' : ''
          }`}
        >
          {text}
        </Text>
      </View>
      {children}
    </View>
  )
}
