import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import { Header } from '../../../components/Header'
import { HeaderButton } from '../../../components/HeaderButton'
import { Form } from '../../../components/NewCareFormComponents'
import { useRecordDetailData } from '../../../hooks/record/useRecordDetailData'

export default function RecordDetails() {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  const { data } = useRecordDetailData(id as string)

  return (
    <ScrollView
      className="flex-1 bg-gray-900"
      showsVerticalScrollIndicator={false}
    >
      <Header
        text={`Registro de "${data?.record.care.title}"`}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      />

      <Form.Field>
        <Form.Label>Descrição</Form.Label>
        <Text className="font-body text-xl text-gray-300">
          {data?.record.description}
        </Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>O cuidado foi realizado?</Form.Label>

        <View className="flex-row items-center">
          <Text className="w-44 font-body text-xl text-gray-300">
            {data?.record.was_accomplished ? 'Sim' : 'Não'}
          </Text>
        </View>
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Horário da Realização:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">
            {dayjs(data?.record.time_of_accomplishment).format(
              'DD/MM/YYYY[ às ]HH:MM',
            )}
          </Text>
        </Form.Field>
      </Form.TwoColumnField>
    </ScrollView>
  )
}
