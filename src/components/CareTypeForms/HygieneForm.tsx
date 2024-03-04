import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function HygieneForm() {
  return (
    <DefaultForm>
      <Form.Field>
        <Form.Label>Higiene a se realizar:</Form.Label>
        <Form.HygieneForm.SelectHygieneCategory
          // todo: adicionar mais categorias e validações
          hygieneCategories={['Banho', 'Escovação (dentes)', 'Lavar o cabelo']}
        />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Tempo a ser dedicado:</Form.Label>
          <Form.HygieneForm.DedicatedTimeInput />
        </Form.Field>
      </Form.TwoColumnField>
    </DefaultForm>
  )
}
