import { Text, TouchableOpacity, View } from 'react-native'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function CareDays() {
  return (
    <View className="mb-6 mt-4 flex-row justify-evenly border-b-2 border-t-2 border-gray-300 py-1">
      {weekDays.map((weekDay, index) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={`${weekDay} - ${index}`}>
            <Text className="mx-1 text-center font-body text-xl text-gray-50">
              {weekDay}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
