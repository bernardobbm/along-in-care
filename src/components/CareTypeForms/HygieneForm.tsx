import { useFormContext } from 'react-hook-form'
import { NewCareFormData } from '../../screens/NewCareForm'
import { Form } from '../NewCareFormComponents'
import { DefaultForm } from './DefaultForm'

export function HygieneForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<NewCareFormData>()

  return (
    <DefaultForm>
      <Form.Field>
        <Form.Label>Higiene a se realizar:</Form.Label>
        <Form.HygieneForm.SelectHygieneCategory
          control={control}
          hygieneCategories={['Banho']}
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Tempo a ser dedicado:</Form.Label>
      </Form.Field>
    </DefaultForm>
  )
}
