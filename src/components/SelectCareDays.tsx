import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'
import { NewCareFormData } from '../screens/NewCareForm'
import { ErrorMessage } from './NewCareFormComponents/ErrorMessageForm'

const availableWeekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export function SelectCareDays() {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<NewCareFormData>()

  const [selectedWeekDays, setSelectedWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex: number) {
    if (selectedWeekDays.includes(weekDayIndex)) {
      setSelectedWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex),
      )
    } else {
      setSelectedWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

  useEffect(() => {
    setValue('careDays', selectedWeekDays.sort())
  }, [setValue, selectedWeekDays])

  return (
    <Controller
      name="careDays"
      control={control}
      render={() => (
        <View className="mb-2">
          <View
            className={`mt-4 flex-row items-center justify-around border-b-2 border-t-2 py-1 ${
              errors.careDays ? 'border-[#e83f5b]' : ' border-gray-300'
            }`}
          >
            {availableWeekDays.map((weekDay, index) => {
              return (
                <TouchableOpacity
                  className={`h-fit w-11 ${
                    selectedWeekDays.includes(index)
                      ? 'rounded-full bg-gray-400'
                      : ''
                  }`}
                  activeOpacity={0.7}
                  onPress={() => {
                    handleToggleWeekDay(index)
                  }}
                  key={`${weekDay} - ${index}`}
                >
                  <Text className="mx-1 text-center font-body text-lg text-gray-50">
                    {weekDay}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>

          {errors.careDays && (
            <ErrorMessage>{errors.careDays.message}</ErrorMessage>
          )}
        </View>
      )}
    />
  )
}
