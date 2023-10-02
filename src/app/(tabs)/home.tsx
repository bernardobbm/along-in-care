import { Image, ScrollView, View } from 'react-native'
import { CareDays } from '../../components/CareDays'
import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'

export default function Home() {
  const username = 'primeiro nome'

  return (
    <View className="flex-1 bg-gray-900 px-8">
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

      <ScrollView className="mb-6" showsVerticalScrollIndicator={false}>
        <CareList category="Medicamentos" />
        <CareList category="Alimentação" />
        <CareList category="Higiene" />
      </ScrollView>
    </View>
  )
}
