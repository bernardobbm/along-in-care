import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { Form } from '../../components/NewCareFormComponents'
import { NewCareFormData } from '../../screens/NewCareForm'

type DefaultForm = {
  children?: ReactNode
}

export function DefaultForm({ children }: DefaultForm) {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<NewCareFormData>()

  const isContinuous = watch('isContinuous')

  return (
    <>
      <Form.Field>
        <Form.Label>Título:</Form.Label>
        <Form.TextInput
          name="title"
          errors={errors.title && errors.title.message}
          control={control}
          placeholder="Digite um título para o cuidado"
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Descrição:</Form.Label>
        <Form.TextInput
          name="description"
          errors={errors.description && errors.description.message}
          control={control}
          placeholder="Descreva o processo deste cuidado"
        />
      </Form.Field>

      <Form.TwoColumnField>
        <Form.Field>
          <Form.Label>Data de Inicio:</Form.Label>
          <Form.StartsAt
            name="startsAt"
            control={control}
            errors={errors.startsAt && errors.startsAt.message}
          />
        </Form.Field>

        {!isContinuous && (
          <Form.Field>
            <Form.Label>Data de Finalização:</Form.Label>
            <Form.EndsAt
              name="endsAt"
              control={control}
              errors={errors.endsAt && errors.endsAt.message}
            />
          </Form.Field>
        )}
      </Form.TwoColumnField>

      <Form.Field>
        <Form.IsContinuous control={control} />
      </Form.Field>

      {children}
    </>
  )
}
