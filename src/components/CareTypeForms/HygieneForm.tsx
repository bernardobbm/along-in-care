import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function HygieneForm() {
  return (
    <DefaultForm>
      <Form.Field>
        <Form.Label>Higiene a se realizar:</Form.Label>
        <Form.HygieneForm.SelectHygieneCategory
          hygieneCategories={[
            'Banho',
            'Escovação (dentes)',
            'Lavar o cabelo',
            'Troca de frauda',
            'Outro',
          ]}
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Instruções para realizar a higiene:</Form.Label>
        <Form.HygieneForm.Instructions placeholder="Digite as instruções para realizar a higiene" />
      </Form.Field>
    </DefaultForm>
  )
}
