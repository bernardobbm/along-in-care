import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Checkbox } from '../components/Checkbox'

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function NewCareSelectDays() {
  const navigation = useNavigation()
  const [weekDays, setWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex),
      )
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-gray-900">
      <View className="flex-1 px-2">
        <Text className="mt-4 font-body text-xl text-gray-50">
          Dias para realização deste cuidado
        </Text>

        <View className="flex-1 justify-center space-y-8">
          {availableWeekDays.map((weekDay, index) => (
            <Checkbox
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))}
        </View>
      </View>

      <View className="mb-10 flex-row justify-between">
        <TouchableOpacity
          className="mt-6 h-12 w-36 flex-row items-center justify-center rounded-md bg-red-600/80"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AppHome')}
        >
          <Text className="font-body_semibold text-base text-gray-50">
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-6 h-12 w-36 flex-row items-center justify-center rounded-md bg-[#1C6AA3]"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('NewCareForm')}
        >
          <Text className="font-body_semibold text-base text-gray-50">
            Próximo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
