import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { useToast } from 'native-base'
import { RefreshControl } from 'react-native-gesture-handler'
import { Header } from '../../components/Header'
import { LinkUpAPatient } from '../../components/LinkUpAPatient'
import { NoItemsRegistered } from '../../components/NoItemsRegistered'
import { RecordListItem } from '../../components/RecordListItem'
import { SelectCategoryFilter } from '../../components/SelectCategoryFilter'
import { useRecordsData } from '../../hooks/record/useRecordsData'
import { useAuth } from '../../hooks/useAuth'
import { useRefreshOnFocus } from '../../hooks/useRefetchOnFocus'
import { capitalizeCategory } from './prescriptions'

export default function Records() {
  const { caregiver } = useAuth()

  const { data, refetch, isLoading, error } = useRecordsData(
    caregiver.patient ?? '',
  )

  useRefreshOnFocus(refetch)

  const [filter, setFilter] = useState<string | null>(null)

  const router = useRouter()

  const toast = useToast()

  function handleSetFilter(filter: string | null) {
    setFilter(filter)
  }

  if (error) {
    return <LinkUpAPatient />
  }

  return (
    <View className="flex-1 px-8 py-2">
      <Header text="Registros" />

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

          {data?.records.length === 0 ? (
            <View className="h-96 justify-center">
              <NoItemsRegistered
                onPress={() => {
                  router.push('/(tabs)')

                  toast.show({
                    description: 'Selecione um cuidado para criar o registro!',
                    placement: 'top',
                    bgColor: 'amber.500',
                  })
                }}
                category={filter ?? ''}
              />
            </View>
          ) : (
            data?.records.map((record) =>
              filter ? (
                filter === capitalizeCategory(record.care.category) ? (
                  <RecordListItem
                    id={record.id}
                    title={record.care.title}
                    description={record.description}
                    key={record.description}
                  />
                ) : null
              ) : (
                <RecordListItem
                  id={record.id}
                  title={record.care.title}
                  description={record.description}
                  key={record.description}
                />
              ),
            )
          )}
        </View>
      </ScrollView>
    </View>
  )
}
