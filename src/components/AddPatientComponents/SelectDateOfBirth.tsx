import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { useFormikContext } from 'formik'
import { Text, TouchableOpacity, View } from 'react-native'

import { AddPatientDataType } from '../../shared/interfaces/add-patient-form-data-type'
import { ErrorMessage } from '../NewCareFormComponents/ErrorMessageForm'

export function SelectDateOfBirth() {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<AddPatientDataType>()

  return (
    <View className="w-40">
      <TouchableOpacity
        onPress={() => {
          DateTimePickerAndroid.open({
            minimumDate: dayjs(new Date(Date.UTC(1900, 1, 1)))
              .startOf('day')
              .toDate(),
            value:
              values.dateOfBirth || dayjs(new Date()).startOf('day').toDate(),

            onChange: (_, date) => setFieldValue('dateOfBirth', date),
          })
        }}
        activeOpacity={0.7}
        className={`items-center rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label ${
          errors.dateOfBirth && touched.dateOfBirth
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
      >
        {values.dateOfBirth ? (
          <Text className="font-label text-base text-gray-50">
            {dayjs.utc(values.dateOfBirth).format('DD-MM-YYYY')}
          </Text>
        ) : (
          <Text className="font-label text-base text-gray-400">DD-MM-AAAA</Text>
        )}
      </TouchableOpacity>

      {errors.dateOfBirth && touched.dateOfBirth && (
        <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>
      )}
    </View>
  )
}
