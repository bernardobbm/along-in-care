import { ScrollView, Text, View } from 'react-native'
import { CareListItem } from './CareListItem'

interface CareListProps {
  category: 'Medicamentos' | 'Alimentação' | 'Higiene'
}

export function CareList({ category }: CareListProps) {
  return (
    <View className="mb-8 gap-5">
      <Text className="font-body text-xl text-gray-50">{category}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <NoItemsRegistered category={category} /> */}

        <CareListItem />
      </ScrollView>
    </View>
  )
}
