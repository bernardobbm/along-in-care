import { Text } from 'react-native'
import { Form } from '../NewCareFormComponents'

type AlimentationDetailsProps = {
  meal: string
  food: string
  notRecommendedFood: string
}

export function AlimentationDetails({
  meal,
  food,
  notRecommendedFood,
}: AlimentationDetailsProps) {
  return (
    <>
      <Form.Field>
        <Form.Label>Refeição:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">{meal}</Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>Alimentos:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">{food}</Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>Alimentos não recomendados:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">
          {notRecommendedFood}
        </Text>
      </Form.Field>
    </>
  )
}
