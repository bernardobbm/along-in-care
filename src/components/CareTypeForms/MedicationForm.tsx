import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  return (
    <DefaultForm>
      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Validade da medicação:</Form.Label>

          <Form.MedicationForm.Validity />
        </Form.Field>

        <Form.Field>
          <Form.Label>Composição:</Form.Label>

          <Form.MedicationForm.Composition />
        </Form.Field>
      </Form.TwoColumnField>

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
          <Form.Label>Dosagem:</Form.Label>

          <Form.MedicationForm.Dosage />
        </Form.Field>

        <Form.Field>
          <Form.Label>Medida:</Form.Label>
          <Form.MedicationForm.SelectMeasureType
            measureType={['ml', 'comprimido(s)', 'camada(s)']}
          />
        </Form.Field>
      </Form.TwoColumnField>
    </DefaultForm>
  )
}
