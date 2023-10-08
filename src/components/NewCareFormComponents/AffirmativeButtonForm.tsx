import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type AffirmativeButtonProps = TouchableOpacityProps & {
  text: string
}

export function AffirmativeButtonForm({
  text,
  ...rest
}: AffirmativeButtonProps) {
  return (
    <TouchableOpacity
      className="mt-6 h-12 w-36 flex-row items-center justify-center rounded-md bg-[#1C6AA3]"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="font-body_semibold text-base text-gray-50">{text}</Text>
    </TouchableOpacity>
  )
}
