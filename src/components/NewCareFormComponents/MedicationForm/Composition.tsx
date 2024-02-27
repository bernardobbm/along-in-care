import { useFormikContext } from 'formik'
import { TextInput, View } from 'react-native'
import { NewCareFormData } from '../../../screens/NewCareForm'
import { ErrorMessage } from '../ErrorMessageForm'

export function Composition() {
  const { values, errors, handleChange, touched } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="w-40">
      <TextInput
        className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-[9.5px] text-center font-label text-base text-gray-50 placeholder:text-center ${
          errors.medication?.composition && touched.medication?.composition
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
        placeholder="mg - mg/g - ml"
        placeholderTextColor="#56565a"
        cursorColor="#eaeaea"
        onChangeText={handleChange('medication.composition')}
        value={values.medication?.composition}
      />

      {errors.medication?.composition && touched.medication?.composition && (
        <ErrorMessage>{errors.medication?.composition}</ErrorMessage>
      )}
    </View>
  )
}
