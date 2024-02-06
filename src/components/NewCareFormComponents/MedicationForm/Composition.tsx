import { Controller } from 'react-hook-form'
import { TextInput, View } from 'react-native'
import { FormFieldHookForm } from '..'
import { ErrorMessage } from '../ErrorMessageForm'

export function Composition({ control, errors }: FormFieldHookForm) {
  return (
    <Controller
      name="medication.composition"
      control={control}
      render={({ field: { value, onChange } }) => (
        <View className="w-40">
          <TextInput
            className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-[9.5px] text-center font-label text-base text-gray-50 placeholder:text-center ${
              errors ? 'border-[#e83f5b]' : 'border-gray-400'
            }`}
            placeholder="mg - mg/g - ml"
            placeholderTextColor="#56565a"
            cursorColor="#eaeaea"
            onChangeText={onChange}
            value={value}
          />

          {errors && <ErrorMessage>{errors}</ErrorMessage>}
        </View>
      )}
    />
  )
}
