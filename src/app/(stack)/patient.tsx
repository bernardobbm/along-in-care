import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import dayjs from 'dayjs'
import { Header } from '../../components/Header'
import { HeaderButton } from '../../components/HeaderButton'
import { useGetPatientData } from '../../hooks/useGetPatientData'

export default function Patient() {
  const router = useRouter()

  const { data } = useGetPatientData()

  console.log(data)

  return (
    <View className="h-screen bg-gray-900">
      <Header
        text="Paciente"
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      />

      <View>
        <Text className="font-body_semibold text-2xl text-gray-50">Dados:</Text>

        <View className="mt-6 space-y-5 rounded-lg bg-gray-700 p-6">
          <View>
            <Text className="font-label text-xl text-gray-50">Nome:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.patient.name}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">CPF:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.patient.cpf}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">Gênero:</Text>
            <Text className="font-body text-xl text-gray-300">
              {data?.patient.gender}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">
              Data de Nascimento:
            </Text>
            <Text className="font-body text-xl text-gray-300">
              {dayjs(data?.patient.date_of_birth).format('DD/MM/YYYY')}
            </Text>
          </View>

          <View>
            <Text className="font-label text-xl text-gray-50">Idade:</Text>
            <Text className="align-self-center mt-2.5 text-3xl text-gray-300">
              {dayjs(new Date())
                .diff(data?.patient.date_of_birth, 'year')
                .toPrecision()
                .toString() || 0}{' '}
              anos
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
