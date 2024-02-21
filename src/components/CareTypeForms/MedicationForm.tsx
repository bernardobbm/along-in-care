import { useFormContext } from 'react-hook-form'

import { NewCareFormData } from '../../screens/NewCareForm'
import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<NewCareFormData>()

  return (
    <DefaultForm>
      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Validade da medicação:</Form.Label>

          <Form.MedicationForm.Validity
            control={control}
            errors={errors.medication?.validity?.message}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Composição:</Form.Label>

          <Form.MedicationForm.Composition
            control={control}
            errors={errors.medication?.composition?.message}
          />
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
          control={control}
        />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Dosagem:</Form.Label>

          <Form.MedicationForm.Dosage
            control={control}
            errors={errors.medication?.dosage?.message}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Medida:</Form.Label>
          <Form.MedicationForm.SelectMeasureType
            control={control}
            measureType={['ml', 'comprimido(s)', 'camada(s)']}
          />
        </Form.Field>
      </Form.TwoColumnField>
    </DefaultForm>
  )
}
