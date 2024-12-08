import { useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { CareDataAxiosResponse } from '../shared/interfaces/care-data-axios-response'
import { shouldBeAdministeredToday } from '../utils/should-be-administered-today'
import { verifyIfIsInAValidInterval } from '../utils/verify-if-is-in-a-valid-interval'
import { CareListItem } from './CareListItem'
import { NoItemsRegistered } from './NoItemsRegistered'

interface CareListProps {
  category: 'Medicação' | 'Recomendações Alimentares' | 'Higiene' | 'Outros'
  cares: CareDataAxiosResponse[]
}

export function CareList({ category, cares }: CareListProps) {
  const router = useRouter()

  return (
    <View className="mb-7">
      <Text className="font-body text-xl text-gray-50">{category}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cares.length === 0 ? (
          <NoItemsRegistered
            category={category}
            onPress={() => router.push('/(tabs)/newCareForm')}
          />
        ) : (
          cares.map((care, index) => {
            let numberOfCaresToday = 0

            if (
              verifyIfIsInAValidInterval(care.starts_at, care.ends_at) &&
              shouldBeAdministeredToday(care.weekDays)
            ) {
              numberOfCaresToday++

              return (
                <CareListItem
                  key={care.id}
                  category={category}
                  title={care.title}
                  description={care.description}
                  id={care.id}
                />
              )
            }

            if (index === cares.length - 1 && numberOfCaresToday === 0) {
              return (
                <NoItemsRegistered
                  key={numberOfCaresToday}
                  category={category}
                  onPress={() => router.push('/(tabs)/newCareForm')}
                />
              )
            }

            return null
          })
        )}
      </ScrollView>
    </View>
  )
}
