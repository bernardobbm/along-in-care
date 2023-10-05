import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { Controller, useForm } from 'react-hook-form'
import { Text, TouchableOpacity } from 'react-native'

export function EndsAtFieldForm() {
  const { control } = useForm()

  return (
    <Controller
      name="endsAt"
      control={control}
      render={({ field: { onChange, value = new Date() } }) => (
        <TouchableOpacity
          onPress={() =>
            DateTimePickerAndroid.open({
              value,
              onChange: (_, date) => {
                onChange(date)
              },
              mode: 'date',
            })
          }
          activeOpacity={0.7}
          className="w-36 items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label"
        >
          <Text className="font-label text-base text-gray-400">
            {dayjs(value).format('DD-MM-YYYY')}
          </Text>
        </TouchableOpacity>
      )}
    />
  )
}
