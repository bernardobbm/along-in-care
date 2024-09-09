import { ScrollView, View } from 'react-native'

import { CareDays } from '../../components/CareDays'
import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'
import { LinkUpAPatient } from '../../components/LinkUpAPatient'
import { useAuth } from '../../hooks/useAuth'

export default function Home() {
  const { caregiver } = useAuth()

  return (
    <View className="flex-1 px-8 py-2">
      <Header text={`Olá, ${caregiver.name}`} />

      <CareDays />

      {caregiver.patient ? (
        <ScrollView className="mb-6" showsVerticalScrollIndicator={false}>
          <CareList category="Medicação" />
          <CareList category="Recomendações Alimentares" />
          <CareList category="Higiene" />
        </ScrollView>
      ) : (
        <LinkUpAPatient />
      )}
    </View>
  )
}
