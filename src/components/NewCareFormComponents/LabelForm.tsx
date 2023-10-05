import { ReactNode } from 'react'
import { Text, TextInputProps } from 'react-native'

interface LabelFormProps extends TextInputProps {
  children: ReactNode
}

export function LabelForm({ children }: LabelFormProps) {
  return (
    <Text className="mb-2 font-label text-base text-gray-50">{children}</Text>
  )
}
