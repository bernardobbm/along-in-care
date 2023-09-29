import { Image, ScrollView, View } from 'react-native'
import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'

export default function Home() {
  const username = 'primeiro nome'

  return (
    <View className="flex-1 bg-gray-900 px-8">
      <Header text={`Olá, ${username}`}>
        <Image
          className="rounded-full"
          alt="Profile picture of the user"
          source={{
            uri: 'https://i.pinimg.com/originals/56/e7/61/56e76147bc69cfabeaa726c5b944521f.jpg',
            width: 40,
            height: 40,
          }}
        />
      </Header>

      <ScrollView className="mb-6">
        <CareList category="Medicamentos" />
        <CareList category="Alimentação" />
        <CareList category="Higiene" />
      </ScrollView>
    </View>
  )
}
