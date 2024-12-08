import { Text, TouchableOpacity, View } from 'react-native'

interface CareDaysInfoProps {
  careDays: number[]
}

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export function CareDaysInfo({ careDays }: CareDaysInfoProps) {
  return (
    <View className="mb-6 mt-4 flex-row justify-between border-b-2 border-t-2 border-gray-300 py-1">
      {weekDays.map((weekDay, index) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={`${weekDay} - ${index}`}>
            <Text
              className={`w-11 text-center font-body text-lg text-gray-50 ${
                careDays.includes(index) ? 'rounded-full bg-gray-400' : ''
              }`}
            >
              {weekDay}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
