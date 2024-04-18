import { ScrollView, View } from 'react-native'

import { CareDays } from '../../components/CareDays'
import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'
import { LinkUpAPatient } from '../../components/LinkUpAPatient'

export default function Home() {
  const username = 'primeiro nome'
  const havePatient = false

  return (
    <View className="flex-1 px-8 py-2">
      <Header text={`Olá, ${username}`} />

      <CareDays />

      {havePatient ? (
        <ScrollView className="mb-6" showsVerticalScrollIndicator={false}>
          <CareList category="Medicamentos" />
          <CareList category="Alimentação" />
          <CareList category="Higiene" />
        </ScrollView>
      ) : (
        <LinkUpAPatient />
      )}
    </View>
  )
}
