import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type AffirmativeButtonProps = TouchableOpacityProps & {
  text: string
}

export function CancelButtonForm({ text, ...rest }: AffirmativeButtonProps) {
  return (
    <TouchableOpacity
      className="mt-6 h-12 w-36 flex-row items-center justify-center rounded-md bg-red-600/80"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="font-body_semibold text-base text-gray-50">{text}</Text>
    </TouchableOpacity>
  )
}
