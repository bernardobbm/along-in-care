import { RefreshControl, ScrollView, View } from 'react-native'

import { CareDaysList } from '../../components/CareDaysList'
import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'
import { LinkUpAPatient } from '../../components/LinkUpAPatient'
import { useCaresData } from '../../hooks/care/useCaresData'
import { useAuth } from '../../hooks/useAuth'
import { useRefreshOnFocus } from '../../hooks/useRefetchOnFocus'
import { CareDataAxiosResponse } from '../../shared/interfaces/care-data-axios-response'

interface SeparateByCategoryParams {
  category: 'Medicação' | 'Recomendações Alimentares' | 'Higiene' | 'Outros'
  cares: CareDataAxiosResponse[]
}

function separateByCategory({ category, cares }: SeparateByCategoryParams) {
  const caresSeparatedByCategory = cares.filter(
    (care) => care.category === category.toLocaleLowerCase(),
  )

  return caresSeparatedByCategory
}

export default function Home() {
  const { caregiver } = useAuth()
  const { data, refetch, isLoading } = useCaresData()

  useRefreshOnFocus(refetch)

  if (!data?.cares) {
    // todo: elaborate a retry page for requisitions error
    return null
  }

  return (
    <View className="flex-1 px-8 py-2">
      <Header text={`Olá, ${caregiver.name}`} />

      <CareDaysList />

      {caregiver.patient ? (
        <ScrollView
          className="mb-6"
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch}
              onStartShouldSetResponder={() => true}
              colors={['#1C6AA3']}
              progressBackgroundColor="#FFF"
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <CareList
            category="Medicação"
            cares={separateByCategory({
              category: 'Medicação',
              cares: data.cares,
            })}
          />
          <CareList
            category="Recomendações Alimentares"
            cares={separateByCategory({
              category: 'Recomendações Alimentares',
              cares: data.cares,
            })}
          />
          <CareList
            category="Higiene"
            cares={separateByCategory({
              category: 'Higiene',
              cares: data.cares,
            })}
          />
          <CareList
            category="Outros"
            cares={separateByCategory({
              category: 'Outros',
              cares: data.cares,
            })}
          />
        </ScrollView>
      ) : (
        <LinkUpAPatient />
      )}
    </View>
  )
}
