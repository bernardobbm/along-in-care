import { useFormikContext } from 'formik'
import { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { NewCareFormData } from '../../screens/NewCareForm'
import { ErrorMessage } from './ErrorMessageForm'

type TextInputFormProps = TextInputProps & {
  name: 'title' | 'description'
}

export function TextInputForm({ name, ...rest }: TextInputFormProps) {
  const { values, handleChange, errors, touched } =
    useFormikContext<NewCareFormData>()

  const [height, setHeight] = useState(0)

  return (
    <View>
      <TextInput
        className={`w-full rounded-md border-2 bg-gray-600 px-4 py-3 font-label text-base text-gray-50 ${
          errors[name] && touched[name] ? 'border-[#e83f5b]' : 'border-gray-400'
        }`}
        multiline
        value={values[name]}
        onChangeText={handleChange(name)}
        cursorColor={'#eaeaea'}
        placeholderTextColor={'#56565a'}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        style={{ height: Math.max(35, height) }}
        {...rest}
      />

      {errors[name] && touched[name] && (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      )}
    </View>
  )
}
