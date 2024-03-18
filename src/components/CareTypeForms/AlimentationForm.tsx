import { View } from 'react-native'
import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function AlimentationForm() {
  return (
    <View>
      <DefaultForm>
        <Form.Field>
          <Form.Label>Selecione a refeição:</Form.Label>
          <Form.AlimentationForm.SelectMealType
            mealTypes={['Café da manhã', 'Almoço', 'Janta', 'Lanche']}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Alimentos:</Form.Label>
          <Form.AlimentationForm.FoodsInput placeholder="Digite os alimentos da refeição" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Alimentos não recomendados:</Form.Label>
          <Form.AlimentationForm.NotRecommendedFoodInput placeholder="Digite alimentos que não devem ser dados" />
        </Form.Field>
      </DefaultForm>
    </View>
  )
}
