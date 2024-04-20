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
      <View className="gap-2">
        <Checkbox
          title="Sempre no mesmo horário"
          onPress={() => {
            handleToggleScheduleFrequencyType()

            if (values.scheduleType === 'fixed') {
              return setFieldValue('scheduleType', 'variable')
            }

            setFieldValue('scheduleType', 'fixed')
          }}
          checked={isFixed}
        />

        <Checkbox
          title="A cada determinada hora"
          onPress={() => {
            handleToggleScheduleFrequencyType()

            if (values.scheduleType === 'variable') {
              return setFieldValue('scheduleType', 'fixed')
            }

            setFieldValue('scheduleType', 'variable')
          }}
          checked={isVariable}
        />
      </View>

      {/* interval */}
      <View>
        <View className="mt-3 flex-row items-center">
          {isVariable ? (
            <>
              <Text className="font-body text-lg text-gray-200">A cada </Text>

              <TextInput
                className={`h-8 w-10 rounded-lg border-2 bg-gray-600 px-2 text-center font-body_semibold text-lg text-gray-50  ${
                  errors.interval && touched.interval
                    ? 'border-[#e83f5b]'
                    : 'border-gray-600'
                }`}
                value={isFixed ? '' : String(values.interval)}
                onChangeText={handleChange('interval')}
                keyboardType="numeric"
                cursorColor="#eaeaea"
                maxLength={2}
              />

              <Text className="font-body text-lg text-gray-200"> horas</Text>
            </>
          ) : null}
        </View>

        {errors.interval && touched.interval && (
          <ErrorMessage>{errors.interval}</ErrorMessage>
        )}
      </View>
    </View>
  )
}
