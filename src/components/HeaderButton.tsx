import { router } from 'expo-router'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface HeaderButtonProps {
  icon: ReactNode
}

export default function HeaderButton({ icon }: HeaderButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
      {icon}
    </TouchableOpacity>
  )
}
