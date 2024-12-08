import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import { Menu, useToast } from 'native-base'
import { CareDaysInfo } from '../../../components/CareDaysInfo'
import { AlimentationDetails } from '../../../components/CareDetailsComponents/AlimentationDetails'
import { HygieneDetails } from '../../../components/CareDetailsComponents/HygieneDetails'
import { MedicationDetails } from '../../../components/CareDetailsComponents/MedicationDetails'
import { HamburgerMenu } from '../../../components/HamburgerMenu'
import { Header } from '../../../components/Header'
import { HeaderButton } from '../../../components/HeaderButton'
import { Form } from '../../../components/NewCareFormComponents'
import { useCareDetailData } from '../../../hooks/care/useCareDetailData'
import { shouldBeAdministeredToday } from '../../../utils/should-be-administered-today'
import { verifyIfIsInAValidInterval } from '../../../utils/verify-if-is-in-a-valid-interval'

export default function CareDetails() {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  const toast = useToast()

  const { data } = useCareDetailData(id as string)

  if (!data?.care) {
    toast.show({
      description: 'Algo deu errado, tente novamente mais tarde!',
      bgColor: 'danger.700',
      placement: 'top',
    })

    return router.back()
  }

  const weekDays = data?.care.weekDays.map(({ week_day }) => {
    return week_day
  })

  return (
    <ScrollView
      className="flex-1 bg-gray-900"
      showsVerticalScrollIndicator={false}
    >
      <Header
        text={data?.care?.title || 'Não encontrado'}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      >
        <HamburgerMenu>
          {verifyIfIsInAValidInterval(data.care.starts_at, data.care.ends_at) &&
          shouldBeAdministeredToday(data.care.weekDays) ? (
            <Menu.Item
              onTouchEnd={() =>
                router.replace(`/(stack)/newRecordForm/${data?.care.id}`)
              }
            >
              <AntDesign name="addfile" size={20} color="#22c55e" />
              <Text className="text-green-500">Criar registro</Text>
            </Menu.Item>
          ) : (
            <></>
          )}

          <Menu.Item onTouchEnd={() => {}}>
            <AntDesign name="delete" size={20} color="#e83f5b" />
            <Text className="break-words text-primaryRed">Apagar cuidado</Text>
          </Menu.Item>
        </HamburgerMenu>
      </Header>

      <CareDaysInfo careDays={weekDays || []} />

      <Form.Field>
        <Form.Label>Descrição</Form.Label>
        <Text className="font-body text-xl text-gray-300">
          {data?.care?.description}
        </Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>Realizar o cuidado:</Form.Label>

        <View className="flex-row items-center">
          <Text className="w-44 font-body text-xl text-gray-300">
            {data?.care?.schedule_type === 'variable'
              ? 'A cada: '
              : 'Todo dia às: '}
          </Text>

          <Text className="font-body text-xl text-gray-300">
            {data?.care.interval} horas
          </Text>
        </View>
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Data de inicio:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">
            {dayjs(data?.care.starts_at).format('DD/MM/YYYY')}
          </Text>
        </Form.Field>

        <Form.Field>
          <Form.Label>Data de encerramento:</Form.Label>
          <Text className="w-40 font-body text-2xl text-gray-300">
            {data?.care.ends_at
              ? dayjs(data.care.ends_at).format('DD/MM/YYYY')
              : 'Não há data de encerramento'}
          </Text>
        </Form.Field>
      </Form.TwoColumnField>

      {data?.care?.category === 'medicação' ? (
        <MedicationDetails
          administrationRoute={
            data?.care?.medication?.administration_route || ''
          }
          quantity={Number(data?.care?.medication?.quantity)}
          unit={data?.care?.medication?.unit || ''}
        />
      ) : data?.care?.category === 'higiene' ? (
        <HygieneDetails
          hygieneCategory={data?.care?.hygiene?.hygiene_category || ''}
          instructions={data?.care?.hygiene?.instructions || ''}
        />
      ) : data?.care?.category === 'recomendações alimentares' ? (
        <AlimentationDetails
          meal={data?.care?.alimentation?.meal || ''}
          food={data?.care?.alimentation?.food || ''}
          notRecommendedFood={
            data?.care?.alimentation?.not_recommended_food || ''
          }
        />
      ) : null}
    </ScrollView>
  )
}
