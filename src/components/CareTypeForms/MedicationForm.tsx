import { Text, View } from 'react-native'
import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  return (
    <View>
      <Text className="my-4 font-body text-3xl text-gray-50">Medicação</Text>
      <DefaultForm>
        <Form.Field>
          <Form.Label>Campo Teste</Form.Label>
          <Form.Label>Campo Teste</Form.Label>
          <Form.Label>Campo Teste</Form.Label>
          <Form.Label>Campo Teste</Form.Label>
        </Form.Field>
      </DefaultForm>
    </View>
  )
}
