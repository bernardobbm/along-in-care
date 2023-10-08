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
  const userTimeZoneDiff = Number(new Date().getTimezoneOffset() / 60)

  const todayWithActualHour = dayjs(new Date())
    .subtract(userTimeZoneDiff, 'hour')
    .startOf('hour')
    .toDate()

  function handleDateSelect(dateType: DateType, date: Date) {
    const startOfDay = dayjs(date).startOf('day').toDate()

    const endOfDay = dayjs(date).endOf('day').startOf('hour').toDate()

    const actualDate = dayjs(new Date(Date.now())).startOf('minute')

    const isDateEqualNow = dayjs(date).startOf('minute').isSame(actualDate)

    if (dateType === 'startsAt' && isDateEqualNow) {
      return todayWithActualHour
    }

    if (dateType === 'endsAt') {
      return endOfDay
    }

    return startOfDay
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
                  value: value || todayWithActualHour,

                  onChange: (_, date) => {
                    if (date) {
                      const selectedDate = handleDateSelect(name, date)

                      console.log(selectedDate)

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
              <Text className="font-label text-base text-gray-400">
                {value ? dayjs(value).format('DD-MM-YYYY') : 'DD-MM-YYYY'}
              </Text>
            </TouchableOpacity>

            {errors && <ErrorMessage>{errors}</ErrorMessage>}
          </View>
        )
      }}
    />
  )
}
