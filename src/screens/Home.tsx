import { Image, ScrollView, StatusBar } from 'react-native'
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

      <Header text={`Olá, ${username}`}>
        <Image
          className="h-10 w-10 rounded-full"
          alt="Profile picture of the user"
          source={{
            uri: 'https://i.pinimg.com/originals/56/e7/61/56e76147bc69cfabeaa726c5b944521f.jpg',
          }}
        />
      </Header>

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
