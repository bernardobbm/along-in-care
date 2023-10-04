import { useNavigation } from '@react-navigation/native'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface HeaderButtonProps {
  icon: ReactNode
}

export function HeaderButton({ icon }: HeaderButtonProps) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
      {icon}
    </TouchableOpacity>
  )
}
