import { useFormikContext } from 'formik'
import { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from '../ErrorMessageForm'

type HygieneInstructions = TextInputProps

export function HygieneInstructions({ ...rest }) {
  const { values, handleChange, errors, touched } =
    useFormikContext<NewCareFormData>()

  const [height, setHeight] = useState(0)

  return (
    <View>
      <TextInput
        className={`w-full rounded-md border-2 bg-gray-600 px-4 py-3 font-label text-base text-gray-50 ${
          errors.hygiene?.instructions && touched.hygiene?.instructions
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
        multiline
        value={values.hygiene.instructions}
        onChangeText={handleChange('hygiene.instructions')}
        cursorColor={'#eaeaea'}
        placeholderTextColor={'#56565a'}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        style={{ height: Math.max(35, height) }}
        {...rest}
      />

      {errors.hygiene?.instructions && touched.hygiene?.instructions && (
        <ErrorMessage>{errors.hygiene?.instructions}</ErrorMessage>
      )}
    </View>
  )
}
