import { Text, TouchableOpacity, View } from 'react-native'

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

export function CareDays() {
  return (
    <View className="mb-6 mt-4 flex-row justify-between border-b-2 border-t-2 border-gray-300 py-1">
      {weekDays.map((weekDay, index) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={`${weekDay} - ${index}`}>
            <Text className="mx-1 text-center font-body text-lg text-gray-50">
              {weekDay}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
