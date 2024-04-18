import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { Text, TouchableOpacity, View } from 'react-native'

import { useFormikContext } from 'formik'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from './ErrorMessageForm'

type SelectDateFieldForm = {
  name: 'startsAt' | 'endsAt'
}

export function SelectDateFieldForm({ name }: SelectDateFieldForm) {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<NewCareFormData>()

  function handleDateSelect(dateType: 'startsAt' | 'endsAt', date: Date) {
    if (dateType === 'endsAt') {
      return dayjs(date).endOf('day').toDate() // end of day of the day selected
    }

    return dayjs(date).startOf('day').toDate() // start of day of the day selected
  }

  return (
    <View className="w-40">
      <TouchableOpacity
        onPress={() => {
          DateTimePickerAndroid.open({
            minimumDate: new Date(),
            value: values[name] || new Date(),

            onChange: (_, date) => {
              if (date) {
                const selectedDate = handleDateSelect(name, date)

                setFieldValue(name, selectedDate)
              }
            },
          })
        }}
        activeOpacity={0.7}
        className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
          errors[name] && touched[name] ? 'border-[#e83f5b]' : 'border-gray-400'
        }`}
      >
        {values[name] ? (
          <Text className="font-label text-base text-gray-50">
            {dayjs(values[name]).format('DD-MM-YYYY')}
          </Text>
        ) : (
          <Text className="font-label text-base text-gray-400">DD-MM-AAAA</Text>
        )}
      </TouchableOpacity>

      {errors[name] && touched[name] && (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      )}
    </View>
  )
}
