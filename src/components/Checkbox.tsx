import { Feather, FontAwesome } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { VariantProps, tv } from 'tailwind-variants'

const checkBox = tv({
  base: 'rounded-lg border-x border-y border-gray-400 bg-gray-600',
  variants: {
    type: {
      checkBox: 'h-6 w-6',
      radio: 'h-5 w-5 rounded-full',
    },
    checked: {
      true: 'items-center justify-center border-primary bg-[#439CDE]',
    },
    error: {
      true: 'border-[#e83f5b]',
    },
  },
  defaultVariants: {
    type: 'checkBox',
    checked: false,
  },
})

const checkBoxLabel = tv({
  base: 'font-body ml-3 text-gray-50',
  variants: {
    labelSize: {
      base: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    labelSize: 'base',
  },
})

type CheckboxProps = TouchableOpacityProps &
  VariantProps<typeof checkBox> &
  VariantProps<typeof checkBoxLabel> & {
    title: string
    checked?: boolean
  }

export function Checkbox({
  title,
  checked,
  labelSize,
  error,
  type = 'checkBox',
  ...rest
}: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mb-2 flex-row items-center"
      {...rest}
    >
      <View className={checkBox({ checked, type, error })}>
        {checked && type === 'checkBox' ? (
          <Feather name="check" size={12} color="#eaeaea" />
        ) : checked && type === 'radio' ? (
          <FontAwesome name="circle" size={10} color="#eaeaea" />
        ) : null}
      </View>

      <Text className={checkBoxLabel({ labelSize })}>{title}</Text>
    </TouchableOpacity>
  )
}
