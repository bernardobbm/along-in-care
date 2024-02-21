import dayjs from 'dayjs'
import { z } from 'zod'

const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

const today = dayjs(new Date())
  .startOf('day')
  .subtract(userTimeZoneDiff, 'hours')
  .toDate()

export const newCareFormSchema = z
  .object({
    careDays: z.array(z.number().min(0).max(6)).min(1, {
      message:
        'É necessário informar ao menos um dia para realização do cuidado',
    }),

    category: z.enum(['medicação', 'alimentação', 'higiene', 'outro']),

    title: z
      .string({ required_error: 'Campo "Título" é obrigatório' })
      .trim()
      .min(1, {
        message: 'Campo "Título" é obrigatório',
      }),

    description: z
      .string({ required_error: 'Campo "Descrição" é obrigatório' })
      .trim()
      .min(1, {
        message: 'Campo "Descrição" é obrigatório',
      }),

    scheduleType: z.enum(['fixo', 'variável']),

    schedule: z
      .string({
        required_error: 'Campo "Horário" é obrigatório',
      })
      .transform((value, ctx) => {
        const parsedValue = parseInt(value)

        if (isNaN(parsedValue)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Digite um horário válido (apenas números)',
          })

          return z.NEVER
        }
        return parsedValue
      })
      .refine((value) => value <= 23, {
        message: 'O limite para os horário é de 23 horas',
      }),

    startsAt: z.coerce.date().min(today, {
      message: 'Selecione uma data de início para o cuidado',
    }),

    endsAt: z.coerce.date().nullable().default(null),

    isContinuous: z.boolean().default(false),

    medication: z
      .object({
        validity: z.date({ required_error: 'Selecione uma data de validade' }),

        dosage: z
          .string({ required_error: 'Campo "Dosagem" é obrigatório' })
          .trim()
          .min(1, { message: 'Campo "Dosagem" é obrigatório' })
          .regex(/(\d+) ?(mg|ml|mcg|mg\/g)$/i, {
            message: 'Digite uma dosagem válida',
          }),
      })
      .optional(),
  })
  .refine(
    ({ isContinuous, endsAt }) => {
      if (!isContinuous) {
        return endsAt !== null
      }

      return true
    },
    {
      path: ['endsAt'],
      message: 'Selecione uma data de finalização',
    },
  )
  .refine(
    ({ startsAt, endsAt }) => {
      if (endsAt) {
        return dayjs(endsAt).isAfter(startsAt)
      }

      return true
    },
    {
      path: ['endsAt'],
      message:
        'A data de finalização precisa ser igual ou após a data de inicio',
    },
  )
  .refine(
    ({ scheduleType, schedule }) => {
      if (scheduleType === 'variável') {
        return schedule > 0
      }

      return true
    },
    {
      message:
        'O intervalo de horas para horários variáveis devem ser de no mínimo 1 hora',
      path: ['schedule'],
    },
  )
