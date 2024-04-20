import { useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import { useState } from 'react'
import { CareListItem } from '../../components/CareListItem'
import { Header } from '../../components/Header'
import { NoItemsRegistered } from '../../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../../components/SelectCategoryFilter'

export default function Prescriptions() {
  const [filter, setFilter] = useState<string | null>(null)

  const router = useRouter()

  function handleSetFilter(filter: string | null) {
    setFilter(filter)
  }

  const hasPrescriptions = true

  return (
    <View className="flex-1 px-8 py-2">
      <Header text="Prescrições" />

      <SelectCategoryFilter setFilter={handleSetFilter} />

      {hasPrescriptions ? (
        <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
          {filter ? (
            <Text className="mb-5 font-body text-xl text-gray-50">
              {filter}
            </Text>
          ) : null}

          <CareListItem title={''} description={''} href={''} />
        </ScrollView>
      ) : (
        <View className="h-4/6 justify-center">
          <NoItemsRegistered
            onPress={() => router.push('/newRecordForm')}
            category={filter ?? ''}
          />
        </View>
      )}
    </View>
  )
}
