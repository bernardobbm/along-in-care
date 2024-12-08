import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  return (
    <DefaultForm>
      <Form.Field>
        <Form.Label>Via de Administração:</Form.Label>
        <Form.MedicationForm.SelectRouteOfAdministration
          routesOfAdministration={[
            'Oral',
            'Tópico (Pomadas)',
            'Parenteral (Injeções)',
          ]}
        />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Quantidade:</Form.Label>

          <Form.MedicationForm.Quantity />
        </Form.Field>

        <Form.Field>
          <Form.Label>Unidade de medida:</Form.Label>
          <Form.MedicationForm.SelectUnit
            units={['ml', 'comprimido(s)', 'camada(s)', 'gotas']}
          />
        </Form.Field>
      </Form.TwoColumnField>
    </DefaultForm>
  )
}
