import { Controller } from 'react-hook-form'
import { TextInput, View } from 'react-native'
import { FormFieldHookForm } from '..'
import { ErrorMessage } from '../../NewCareFormComponents/ErrorMessageForm'

export function Dosage({ control, errors }: FormFieldHookForm) {
  return (
    <Controller
      name="medication.dosage"
      control={control}
      render={({ field: { value = '', onChange } }) => (
        <View className="mt-2 w-40">
          <TextInput
            className={`h-8 w-10 rounded-lg border-2 bg-gray-600 px-2 text-center font-body_semibold text-lg text-gray-50  ${
              errors ? 'border-[#e83f5b]' : 'border-gray-600'
            }`}
            value={String(value)}
            onChangeText={onChange}
            keyboardType="numeric"
            cursorColor="#eaeaea"
            maxLength={2}
          />

          {errors && <ErrorMessage>{errors}</ErrorMessage>}
        </View>
      )}
    />
  )
}
