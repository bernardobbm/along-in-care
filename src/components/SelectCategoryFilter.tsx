import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type SelectCategoryFilterProps = {
  setFilter: (filter: string | null) => void
}

const categories = [
  'Medicação',
  'Higiene',
  'Outro',
  'Recomendações alimentares',
]

export function SelectCategoryFilter({ setFilter }: SelectCategoryFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<number>()

  return (
    <View className="w-full flex-row flex-wrap rounded-xl bg-gray-700 px-2 py-3">
      {categories.map((category, index) => (
        <TouchableOpacity
          className="m-1 rounded-2xl bg-gray-500"
          key={`${category}-${index}`}
          activeOpacity={0.7}
          onPress={() => {
            if (!(selectedFilter === index)) {
              setSelectedFilter(index)

              setFilter(categories[index])
            } else {
              setSelectedFilter(-1)
              setFilter(null)
            }
          }}
        >
          <Text
            className={`px-3 py-1 text-base text-gray-50 ${
              selectedFilter === index ? 'text-primary' : ''
            }`}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
