import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { useFormikContext } from 'formik'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { Checkbox } from '../Checkbox'
import { ErrorMessage } from './ErrorMessageForm'

export function ScheduleFrequency() {
  const [isFixed, setIsFixed] = useState(false)
  const [isVariable, setIsVariable] = useState(true)

  const { values, handleChange, errors, setFieldValue, touched } =
    useFormikContext<NewCareFormData>()

  function handleToggleScheduleFrequencyType() {
    setIsFixed((prevState) => !prevState)
    setIsVariable((prevState) => !prevState)
  }

  return (
    <View>
      {/* schedule type */}
      <View className="flex-row gap-8">
        <Checkbox
          title="Fixo"
          onPress={() => {
            handleToggleScheduleFrequencyType()

            if (values.scheduleType === 'fixo') {
              return setFieldValue('scheduleType', 'variável')
            }

            setFieldValue('scheduleType', 'fixo')
          }}
          checked={isFixed}
        />

        <Checkbox
          title="De hora em hora"
          onPress={() => {
            handleToggleScheduleFrequencyType()

            if (values.scheduleType === 'variável') {
              return setFieldValue('scheduleType', 'fixo')
            }

            setFieldValue('scheduleType', 'variável')
          }}
          checked={isVariable}
        />
      </View>

      {/* schedule */}
      <View>
        <View className="mt-3 flex-row items-center">
          {isFixed ? (
            <Text className="font-body text-lg text-gray-200">
              Todo dia às{' '}
            </Text>
          ) : (
            <Text className="font-body text-lg text-gray-200">A cada </Text>
          )}

          <TextInput
            className={`h-8 w-10 rounded-lg border-2 bg-gray-600 px-2 text-center font-body_semibold text-lg text-gray-50  ${
              errors.schedule && touched.schedule
                ? 'border-[#e83f5b]'
                : 'border-gray-600'
            }`}
            value={String(values.schedule)}
            onChangeText={handleChange('schedule')}
            keyboardType="numeric"
            cursorColor="#eaeaea"
            maxLength={2}
          />

          <Text className="font-body text-lg text-gray-200"> horas</Text>
        </View>

        {errors.schedule && touched.schedule && (
          <ErrorMessage>{errors.schedule}</ErrorMessage>
        )}
      </View>
    </View>
  )
}
