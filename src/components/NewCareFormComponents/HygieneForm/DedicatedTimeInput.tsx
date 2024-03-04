import { useFormikContext } from 'formik'
import { TextInput, TextInputProps, View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from '../ErrorMessageForm'

type DedicatedTimeInputProps = TextInputProps

export function DedicatedTimeInput({ ...rest }: DedicatedTimeInputProps) {
  const { values, errors, handleChange, touched } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="w-40">
      <TextInput
        className={`h-12 w-20 rounded-md border-2 bg-gray-600 px-4 py-3 text-center font-label text-base text-gray-50 ${
          errors.hygiene?.dedicatedTime && touched.hygiene?.dedicatedTime
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
        value={String(values.hygiene?.dedicatedTime)}
        onChangeText={handleChange('hygiene.dedicatedTime')}
        cursorColor={'#eaeaea'}
        placeholderTextColor={'#56565a'}
        keyboardType="numeric"
        {...rest}
      />

      {errors.hygiene?.dedicatedTime && touched.hygiene?.dedicatedTime && (
        <ErrorMessage>{errors.hygiene.dedicatedTime}</ErrorMessage>
      )}
    </View>
  )
}
