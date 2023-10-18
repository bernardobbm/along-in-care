import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { Controller, useFormContext } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'
import { NewCareFormData } from '../../screens/NewCareForm'
import { Form } from '../NewCareFormComponents'
import { ErrorMessage } from '../NewCareFormComponents/ErrorMessageForm'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<NewCareFormData>()

  const today = dayjs(new Date()).startOf('day').toDate()

  const tomorrow = dayjs(today)
    .date(today.getDate() + 1)
    .startOf('day')
    .toDate()

  return (
    <View>
      <DefaultForm>
        <Form.TwoColumnField>
          <Form.Field>
            <Form.Label>Validade da medicação:</Form.Label>

            <Controller
              name="medication.validity"
              control={control}
              render={({ field: { value, onChange } }) => (
                <View className="w-40">
                  <TouchableOpacity
                    onPress={() => {
                      DateTimePickerAndroid.open({
                        minimumDate: tomorrow,
                        value: value ?? tomorrow,
                        onChange: (_, date) => {
                          if (date) onChange(date)
                        },
                      })
                    }}
                    activeOpacity={0.7}
                    className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
                      errors.medication?.validity
                        ? 'border-[#e83f5b]'
                        : 'border-gray-400'
                    }`}
                  >
                    {value ? (
                      <Text className="font-label text-base text-gray-50">
                        {dayjs(value).format('DD-MM-YYYY')}
                      </Text>
                    ) : (
                      <Text className="font-label text-base text-gray-400">
                        DD-MM-AAAA
                      </Text>
                    )}
                  </TouchableOpacity>

                  {errors.medication?.validity && (
                    <ErrorMessage>
                      {errors.medication.validity.message}
                    </ErrorMessage>
                  )}
                </View>
              )}
            />
          </Form.Field>
        </Form.TwoColumnField>
      </DefaultForm>
    </View>
  )
}
