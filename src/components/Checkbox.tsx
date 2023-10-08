import { Feather } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

interface CheckboxProps extends TouchableOpacityProps {
  title: string
  checked?: boolean
  size?: 'sm' | 'lg'
}

export function Checkbox({
  title,
  checked = false,
  size,
  ...rest
}: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mb-2 flex-row items-center"
      {...rest}
    >
      {checked ? (
        <View
          className={`${
            size === 'sm' ? 'h-6 w-6' : 'h-8 w-8'
          } items-center justify-center rounded-lg border-2 border-[#1C6AA3] bg-[#439CDE]`}
        >
          <Feather
            name="check"
            size={size === 'sm' ? 12 : 20}
            color={'#eaeaea'}
          />
        </View>
      ) : (
        <View
          className={`${
            size === 'sm' ? 'h-6 w-6' : 'h-8 w-8'
          } rounded-lg border-2 border-gray-400 bg-gray-600`}
        />
      )}

      <Text className="ml-3 font-body text-base text-gray-50">{title}</Text>
    </TouchableOpacity>
  )
}
