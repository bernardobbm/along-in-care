import { Text } from 'react-native'
import { Form } from '../NewCareFormComponents'

type MedicationDetailsProps = {
  administrationRoute: string
  quantity: number
  unit: string
}

export function MedicationDetails({
  administrationRoute,
  quantity,
  unit,
}: MedicationDetailsProps) {
  return (
    <>
      <Form.Field>
        <Form.Label>Rota de Administração:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">
          {administrationRoute}
        </Text>
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Quantidade:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">{quantity}</Text>
        </Form.Field>

        <Form.Field>
          <Form.Label>Unidade de medida:</Form.Label>
          <Text className="font-body text-2xl text-gray-300">{unit}</Text>
        </Form.Field>
      </Form.TwoColumnField>
    </>
  )
}
