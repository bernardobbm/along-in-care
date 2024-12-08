import { useFormikContext } from 'formik'
import { ReactNode } from 'react'
import { Form } from '../../components/NewCareFormComponents'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { ScheduleFrequency } from '../NewCareFormComponents/ScheduleFrequency'
import { SelectFrequency } from '../NewCareFormComponents/SelectFrequency'
import { StartTime } from '../NewCareFormComponents/StartTime'
import { SelectCareDays } from '../SelectCareDays'

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

      {children}

      <Form.Field>
        <Form.Label>Realizar o cuidado:</Form.Label>

        <ScheduleFrequency />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Periodicidade:</Form.Label>

          <SelectFrequency
            frequencies={['Diariamente', 'Mensalmente', 'Anualmente']}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Horário de inicio:</Form.Label>
          <StartTime />
        </Form.Field>
      </Form.TwoColumnField>

      {values.frequency !== 'diariamente' ? null : (
        <Form.Field>
          <Form.Label>Selecione os dias para o cuidado:</Form.Label>

          <SelectCareDays />
        </Form.Field>
      )}

      <Form.Field>
        <Form.Label>Este cuidado é contínuo?</Form.Label>
        <Form.IsContinuous />
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
    </>
  )
}
