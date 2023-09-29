import AntDesign from '@expo/vector-icons/AntDesign'
import { View } from 'react-native'

interface NewRegistrationButtonProps {
  size: number
  color: string
}

export function NewRegistrationButton({
  color,
  size,
}: NewRegistrationButtonProps) {
  return (
    <View className="mb-10 h-20 w-20 items-center justify-center rounded-full border-4 border-gray-900 bg-[#1C6AA3]">
      <AntDesign name="plus" color={color} size={size} />
    </View>
  )
}
