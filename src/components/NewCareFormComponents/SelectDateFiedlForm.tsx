import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { Controller } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'

import { FormFieldHookForm } from '.'
import { ErrorMessage } from './ErrorMessageForm'

type DateType = 'startsAt' | 'endsAt'

type SelectDateFieldForm = FormFieldHookForm & {
  name: DateType
}

export function SelectDateFieldForm({
  name,
  errors,
  control,
}: SelectDateFieldForm) {
  function handleDateSelect(dateType: DateType, date: Date) {
    const actualDate = dayjs(new Date(Date.now())).startOf('hour')

    const isDateEqualNow = dayjs(date).startOf('hour').isSame(actualDate)

    if (dateType === 'startsAt' && isDateEqualNow) {
      return dayjs(date).startOf('hour').toDate() // today with actual hour
    }

    if (dateType === 'endsAt') {
      return dayjs(date).endOf('day').startOf('hour').toDate() // end of day of the day selected
    }

    return dayjs(date).startOf('day').toDate() // start of day of the day selected
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value } }) => {
        return (
          <View className="w-40">
            <TouchableOpacity
              onPress={() => {
                DateTimePickerAndroid.open({
                  minimumDate: new Date(),
                  value: value ?? new Date(),

                  onChange: (_, date) => {
                    if (date) {
                      const selectedDate = handleDateSelect(name, date)

                      onChange(selectedDate)
                    }
                  },
                })
              }}
              activeOpacity={0.7}
              className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
                errors ? 'border-[#e83f5b]' : 'border-gray-400'
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

            {errors && <ErrorMessage>{errors}</ErrorMessage>}
          </View>
        )
      }}
    />
  )
}
