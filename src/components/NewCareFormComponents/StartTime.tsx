import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useFormikContext } from 'formik'
import { Text, TouchableOpacity, View } from 'react-native'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from './ErrorMessageForm'

dayjs.extend(utc)

export function StartTime() {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="w-[150px]">
      <TouchableOpacity
        onPress={() => {
          DateTimePickerAndroid.open({
            mode: 'time',
            minimumDate: dayjs.utc(new Date()).toDate(),
            value: values.startTime || dayjs.utc(new Date()).toDate(),

            onChange: (_, time) =>
              setFieldValue('startTime', dayjs.utc(time).toDate()),
          })
        }}
        activeOpacity={0.7}
        className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
          errors.startTime && touched.startTime
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
      >
        {values.startTime ? (
          <Text className="font-label text-base text-gray-50">
            {dayjs(values.startTime).format('HH:mm')}
          </Text>
        ) : (
          <Text className="font-label text-base text-gray-400">HH : MM</Text>
        )}
      </TouchableOpacity>

      {errors.startTime && touched.startTime && (
        <ErrorMessage>{errors.startTime}</ErrorMessage>
      )}
    </View>
  )
}
