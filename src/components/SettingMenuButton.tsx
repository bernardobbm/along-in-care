import { Href, Link } from 'expo-router'
import { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface SettingMenuButtonProps {
  onPress?: () => void
  icon: ReactNode
  text: string
  href: Href<string>
  color?: 'normal' | 'danger'
}

export function SettingMenuButton({
  onPress,
  icon,
  text,
  href,
  color,
}: SettingMenuButtonProps) {
  return (
    <Link className="w-fit" href={href} replace={!onPress}>
      <TouchableOpacity
        className="flex-row items-center space-x-4"
        activeOpacity={0.7}
        onPress={onPress}
      >
        {icon}
        <Text
          className={`text-lg ${
            color === 'danger' ? 'text-primaryRed' : 'text-gray-50'
          }`}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  )
}
