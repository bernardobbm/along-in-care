import { useFormContext } from 'react-hook-form'
import { View } from 'react-native'
import { NewCareFormData } from '../../screens/NewCareForm'
import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function MedicationForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<NewCareFormData>()

  return (
    <View>
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
      </DefaultForm>
    </View>
  )
}
