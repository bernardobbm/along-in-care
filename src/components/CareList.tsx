import { ScrollView, Text, View } from 'react-native'
import { CareListItem } from './CareListItem'

interface CareListProps {
  category: 'Medicação' | 'Recomendações Alimentares' | 'Higiene'
}

export function CareList({ category }: CareListProps) {
  return (
    <View className="mb-8 gap-5">
      <Text className="font-body text-xl text-gray-50">{category}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <NoItemsRegistered category={category} onPress={() => null} /> */}

        <CareListItem title={''} description={''} href={''} />
      </ScrollView>
    </View>
  )
}
