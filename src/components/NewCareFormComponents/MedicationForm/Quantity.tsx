import { useFormikContext } from 'formik'
import { TextInput, View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from '../ErrorMessageForm'

export function Quantity() {
  const { values, errors, handleChange, touched } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="w-40">
      <TextInput
        className={`h-12 w-16 rounded-md border-2 bg-gray-600 px-4 py-3 text-center font-label text-base text-gray-50 ${
          errors.medication?.quantity && touched.medication?.quantity
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
        value={String(values.medication?.quantity)}
        onChangeText={handleChange('medication.quantity')}
        keyboardType="numeric"
        cursorColor="#eaeaea"
        maxLength={2}
      />

      {errors.medication?.quantity && touched.medication?.quantity && (
        <ErrorMessage>{errors.medication.quantity}</ErrorMessage>
      )}
    </View>
  )
}
