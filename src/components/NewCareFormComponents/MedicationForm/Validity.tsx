import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { useFormikContext } from 'formik'
import { Text, TouchableOpacity, View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from '../ErrorMessageForm'

export function Validity() {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<NewCareFormData>()

  const today = dayjs(new Date()).startOf('day').toDate()

  const tomorrow = dayjs(today)
    .date(today.getDate() + 1)
    .startOf('day')
    .toDate()

  return (
    <View className="w-40">
      <TouchableOpacity
        onPress={() => {
          DateTimePickerAndroid.open({
            minimumDate: tomorrow,
            value: values.medication.validity || tomorrow,
            onChange: (_, date) => {
              if (date) setFieldValue('medication.validity', date)
            },
          })
        }}
        activeOpacity={0.7}
        className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
          errors.medication?.validity && touched.medication?.validity
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
      >
        {values.medication.validity ? (
          <Text className="font-label text-base text-gray-50">
            {dayjs(values.medication.validity).format('DD-MM-YYYY')}
          </Text>
        ) : (
          <Text className="font-label text-base text-gray-400">DD-MM-AAAA</Text>
        )}
      </TouchableOpacity>

      {errors.medication?.validity && touched.medication?.validity && (
        <ErrorMessage>{errors.medication.validity}</ErrorMessage>
      )}
    </View>
  )
}
