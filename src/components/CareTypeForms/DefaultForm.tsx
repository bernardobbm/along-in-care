import { useFormikContext } from 'formik'
import { ReactNode } from 'react'
import { Form } from '../../components/NewCareFormComponents'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { ScheduleFrequency } from '../NewCareFormComponents/ScheduleFrequency'

type DefaultForm = {
  children?: ReactNode
}

export function DefaultForm({ children }: DefaultForm) {
  const { values } = useFormikContext<NewCareFormData>()

  return (
    <>
      <Form.Field>
        <Form.Label>Título:</Form.Label>
        <Form.TextInput
          name="title"
          placeholder="Digite um título para o cuidado"
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Descrição:</Form.Label>
        <Form.TextInput
          name="description"
          placeholder="Descreva o processo deste cuidado"
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Horário:</Form.Label>

        <ScheduleFrequency />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Data de Inicio:</Form.Label>
          <Form.StartsAt name="startsAt" />
        </Form.Field>

        {!values.isContinuous && (
          <Form.Field>
            <Form.Label>Data de Finalização:</Form.Label>
            <Form.EndsAt name="endsAt" />
          </Form.Field>
        )}
      </Form.TwoColumnField>

      <Form.Field>
        <Form.IsContinuous />
      </Form.Field>

      {children}
    </>
  )
}
