import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type HeaderButtonProps = TouchableOpacityProps & {
  icon: ReactNode
}

export function HeaderButton({ icon, ...rest }: HeaderButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      {icon}
    </TouchableOpacity>
  )
}
