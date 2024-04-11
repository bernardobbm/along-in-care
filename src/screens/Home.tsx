import { ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CareDays } from '../components/CareDays'
import { CareList } from '../components/CareList'
import { Header } from '../components/Header'
import { LinkUpAPatient } from '../components/LinkUpAPatient'

export function Home() {
  const username = 'primeiro nome'
  const havePatient = false

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-8">
      <StatusBar barStyle="light-content" backgroundColor="#121215" />

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
    </SafeAreaView>
  )
}
