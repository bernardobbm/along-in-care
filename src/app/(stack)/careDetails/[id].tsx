import { AntDesign } from '@expo/vector-icons'
import { ScrollView, Text, View } from 'react-native'

import { useRouter } from 'expo-router'
import { CareDays } from '../../../components/CareDays'
import { AlimentationDetails } from '../../../components/CareDetailsComponents/AlimentationDetails'
import { HygieneDetails } from '../../../components/CareDetailsComponents/HygieneDetails'
import { MedicationDetails } from '../../../components/CareDetailsComponents/MedicationDetails'
import { Header } from '../../../components/Header'
import { HeaderButton } from '../../../components/HeaderButton'
import { Form } from '../../../components/NewCareFormComponents'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'

export default function CareDetails() {
  // const { } = useLocalSearchParams()
  const router = useRouter()

  const care: NewCareFormData = {
    careDays: [0, 3, 6],
    category: 'recomendações alimentares',
    title: 'Cuidado Gigatônico',
    description: '',
    frequency: 'diariamente',
    startTime: null,
    scheduleType: 'variable',
    schedule: '',
    startsAt: null,
    endsAt: null,
    isContinuous: false,
    medication: {
      administrationRoute: 'Oral',
      quantity: '5',
      unit: 'ml',
    },
    hygiene: {
      hygieneCategory: 'Banho',
      instructions:
        ' tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho tomar banho',
    },
    alimentation: {
      meal: 'Almoço',
      food: 'pedra tijolo cimento paralelepipedo',
      notRecommendedFood: 'qualquer coisa comestivel',
    },
  }

  return (
    <ScrollView
      className="flex-1 bg-gray-900"
      showsVerticalScrollIndicator={false}
    >
      <Header
        text={care.title}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
            onPress={() => router.back()}
          />
        }
      />

      <CareDays />

      <Form.Field>
        <Form.Label>Descrição</Form.Label>
        <Text className="font-body text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          tenetur aspernatur nihil animi odio eveniet minus reprehenderit ab,
          repudiandae debitis excepturi architecto dignissimos porro,
          accusantium deserunt aliquid officia maxime voluptas.
        </Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>Realizar o cuidado:</Form.Label>

        <View className="flex-row items-center space-x-16">
          <Text className="w-44 font-body text-xl text-gray-300">
            Sempre no mesmo horário
          </Text>

          <Text className="font-body text-xl text-gray-300">18:00 horas</Text>
        </View>
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Data de inicio:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">10/11/2020</Text>
        </Form.Field>

        <Form.Field>
          <Form.Label>Data de encerramento:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">11/12/2020</Text>
        </Form.Field>
      </Form.TwoColumnField>

      {care.category === 'medicação' ? (
        <MedicationDetails
          administrationRoute={care.medication.administrationRoute}
          quantity={Number(care.medication.quantity)}
          unit={care.medication.unit}
        />
      ) : care.category === 'higiene' ? (
        <HygieneDetails
          hygieneCategory={care.hygiene.hygieneCategory}
          instructions={care.hygiene.instructions}
        />
      ) : care.category === 'recomendações alimentares' ? (
        <AlimentationDetails
          meal={care.alimentation.meal}
          food={care.alimentation.food}
          notRecommendedFood={care.alimentation.notRecommendedFood}
        />
      ) : null}
    </ScrollView>
  )
}
