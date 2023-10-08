import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { TextInput, TextInputProps, View } from 'react-native'
import { FormFieldHookForm } from '.'
import { ErrorMessage } from './ErrorMessageForm'

type TextInputFormProps = TextInputProps &
  FormFieldHookForm & {
    name: 'title' | 'description'
  }

export function TextInputForm({
  name,
  control,
  errors,
  ...rest
}: TextInputFormProps) {
  const [height, setHeight] = useState(0)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View>
          <TextInput
            className={`w-full rounded-md border-2 bg-gray-600 px-4 py-3 font-label text-base text-gray-50 ${
              errors ? 'border-[#e83f5b]' : 'border-gray-400'
            }`}
            multiline
            value={value}
            onChangeText={onChange}
            cursorColor={'#eaeaea'}
            placeholderTextColor={'#56565a'}
            onContentSizeChange={(event) =>
              setHeight(event.nativeEvent.contentSize.height)
            }
            style={{ height: Math.max(35, height) }}
            {...rest}
          />

          {errors && <ErrorMessage>{errors}</ErrorMessage>}
        </View>
      )}
    />
  )
}
