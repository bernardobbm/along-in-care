import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { CareListItem } from '../../components/CareListItem'
import { Header } from '../../components/Header'
import { NoItemsRegistered } from '../../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../../components/SelectCategoryFilter'

export default function Records() {
  const [filter, setFilter] = useState<string | null>(null)

  const router = useRouter()

  function handleSetFilter(filter: string | null) {
    setFilter(filter)
  }

  const hasRecords = false

  return (
    <View className="flex-1 px-8 py-2">
      <Header text="Registros" />

      <SelectCategoryFilter setFilter={handleSetFilter} />

      {hasRecords ? (
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
