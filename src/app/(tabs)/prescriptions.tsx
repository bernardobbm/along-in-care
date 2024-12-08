import { useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import { useState } from 'react'
import { RefreshControl } from 'react-native-gesture-handler'
import { CareListItem } from '../../components/CareListItem'
import { Header } from '../../components/Header'
import { NoItemsRegistered } from '../../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../../components/SelectCategoryFilter'
import { useCaresData } from '../../hooks/care/useCaresData'
import { useRefreshOnFocus } from '../../hooks/useRefetchOnFocus'

export function capitalizeCategory(category: string) {
  return category === 'medicação'
    ? 'Medicação'
    : category === 'higiene'
      ? 'Higiene'
      : category === 'recomendações alimentares'
        ? 'Recomendações Alimentares'
        : 'Outros'
}

export default function Prescriptions() {
  const [filter, setFilter] = useState<string | null>(null)

  const router = useRouter()
  const { data, refetch, isLoading } = useCaresData()

  useRefreshOnFocus(refetch)

  function handleSetFilter(filter: string | null) {
    setFilter(filter)
  }

  return (
    <View className="flex-1 px-8 py-2">
      <Header text="Prescrições" />

      <SelectCategoryFilter setFilter={handleSetFilter} />

      <ScrollView
        className="mt-8"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            onStartShouldSetResponder={() => true}
            colors={['#1C6AA3']}
            progressBackgroundColor="#FFF"
          />
        }
      >
        <View className="max-h-screen">
          {filter ? (
            <Text className="mb-2 font-body text-xl text-gray-50">
              {filter}
            </Text>
          ) : null}

          {data?.cares.length === 0 ? (
            <View className="h-96 justify-center">
              <NoItemsRegistered
                onPress={() => router.push('/(tabs)/newCareForm')}
                category={filter ?? ''}
              />
            </View>
          ) : (
            data?.cares.map((care, index) =>
              filter ? (
                filter === capitalizeCategory(care.category) ? (
                  <CareListItem
                    key={`${care.title} ${index}`}
                    category={capitalizeCategory(care.category)}
                    title={care.title}
                    description={care.description}
                    id={care.id}
                  />
                ) : null
              ) : (
                <CareListItem
                  key={`${care.title} ${index}`}
                  category={capitalizeCategory(care.category)}
                  title={care.title}
                  description={care.description}
                  id={care.id}
                />
              ),
            )
          )}
        </View>
      </ScrollView>
    </View>
  )
}
