import { Text, TouchableOpacity, View } from 'react-native'

export function SelectCategoryFilter() {
  const categories = [
    'Medicação',
    'Higiene',
    'Outro',
    'Recomendações alimentares',
  ]

  return (
    <View className="w-full flex-row flex-wrap rounded-xl bg-gray-700 px-2 py-3">
      {categories.map((category) => (
        <TouchableOpacity
          className="m-1 rounded-2xl bg-gray-500"
          activeOpacity={0.7}
          key={category}
        >
          <Text className="px-3 py-1 text-base text-gray-50">{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
