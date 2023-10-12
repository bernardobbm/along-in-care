import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { NewCareFormData } from '../../screens/NewCareForm'
import { Checkbox } from '../Checkbox'
import { ErrorMessage } from './ErrorMessageForm'

export function ScheduleFrequency() {
  const {
    control,
    formState: { errors },
  } = useFormContext<NewCareFormData>()

  const [isFixed, setIsFixed] = useState(false)
  const [isVariable, setIsVariable] = useState(true)

  function handleToggleScheduleFrequencyType() {
    setIsFixed((prevState) => !prevState)
    setIsVariable((prevState) => !prevState)
  }

  return (
    <View>
      <Controller
        name="scheduleType"
        control={control}
        defaultValue={'variável'}
        render={({ field: { value, onChange } }) => (
          <View className="flex-row gap-8">
            <Checkbox
              title="Fixo"
              onPress={() => {
                handleToggleScheduleFrequencyType()

                if (value === 'fixo') {
                  return onChange('variável')
                }

                onChange('fixo')
              }}
              checked={isFixed}
            />

            <Checkbox
              title="De hora em hora"
              onPress={() => {
                handleToggleScheduleFrequencyType()

                if (value === 'variável') {
                  return onChange('fixo')
                }

                onChange('variável')
              }}
              checked={isVariable}
            />
          </View>
        )}
      />

      <View>
        <Controller
          name="schedule"
          control={control}
          render={({ field: { value = '', onChange } }) => (
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
                  errors.schedule ? 'border-[#e83f5b]' : 'border-gray-600'
                }`}
                value={String(value)}
                onChangeText={onChange}
                keyboardType="numeric"
                cursorColor="#eaeaea"
                maxLength={2}
              />

              <Text className="font-body text-lg text-gray-200"> horas</Text>
            </View>
          )}
        />

        {errors.schedule && (
          <ErrorMessage>{errors.schedule.message}</ErrorMessage>
        )}
      </View>
    </View>
  )
}
