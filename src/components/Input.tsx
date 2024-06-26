import { useState } from 'react'
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputProps,
  View,
} from 'react-native'
import { VariantProps, tv } from 'tailwind-variants'
import { ErrorMessage } from './NewCareFormComponents/ErrorMessageForm'

const input = tv({
  base: 'w-full h-12 rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label text-base text-gray-50',
  variants: {
    error: {
      true: 'border-[#e83f5b]',
    },
    size: {},
  },

  defaultVariants: {
    error: false,
  },
})

type InputFormProps = TextInputProps &
  VariantProps<typeof input> & {
    multiline?: boolean
    label?: string
    errorMessage?: string
  }

export function Input({
  label,
  error,
  errorMessage,
  multiline,
  ...rest
}: InputFormProps) {
  const [height, setHeight] = useState(0)

  const multilineAttributes = multiline
    ? {
        multiline: true,
        onContentSizeChange: (
          event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
        ) => setHeight(event.nativeEvent.contentSize.height),
        style: { height: Math.max(35, height) },
      }
    : {}

  return (
    <View className={`${label ? 'mt-5' : ''}`}>
      {label ? (
        <Text className="mb-2 font-label text-base text-gray-50">{label}</Text>
      ) : null}

      <TextInput
        className={input({ error })}
        cursorColor="#eaeaea"
        placeholderTextColor="#56565a"
        {...multilineAttributes}
        {...rest}
      />

      {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </View>
  )
}
