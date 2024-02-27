import { useFormikContext } from 'formik'
import { TextInput, View } from 'react-native'
import { NewCareFormData } from '../../../screens/NewCareForm'
import { ErrorMessage } from '../../NewCareFormComponents/ErrorMessageForm'

export function Dosage() {
  const { values, errors, handleChange, touched } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="mt-2 w-40">
      <TextInput
        className={`h-8 w-10 rounded-lg border-2 bg-gray-600 px-2 text-center font-body_semibold text-lg text-gray-50  ${
          errors.medication?.dosage && touched.medication?.dosage
            ? 'border-[#e83f5b]'
            : 'border-gray-600'
        }`}
        value={String(values.medication.dosage)}
        onChangeText={handleChange('medication.dosage')}
        keyboardType="numeric"
        cursorColor="#eaeaea"
        maxLength={2}
      />

      {errors.medication?.dosage && touched.medication?.dosage && (
        <ErrorMessage>{errors.medication?.dosage}</ErrorMessage>
      )}
    </View>
  )
}
