import { Text } from 'react-native'
import { Form } from '../NewCareFormComponents'

type HygieneDetailsProps = {
  hygieneCategory: string
  instructions: string
}

export function HygieneDetails({
  hygieneCategory,
  instructions,
}: HygieneDetailsProps) {
  return (
    <>
      <Form.Field>
        <Form.Label>Higiene a se realizar:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">
          {hygieneCategory}
        </Text>
      </Form.Field>

      <Form.Field>
        <Form.Label>Instruções para realizar a higiene:</Form.Label>
        <Text className="font-body text-2xl text-gray-300">{instructions}</Text>
      </Form.Field>
    </>
  )
}
