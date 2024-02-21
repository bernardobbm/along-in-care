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

    schedule: z.coerce
      .number({
        required_error: 'Campo "Horário" é obrigatório',
        invalid_type_error: 'Digite um horário válido (apenas números)',
      })
      .nonnegative({ message: 'O horário não pode ser um valor negativo' })
      .max(23, { message: 'O limite para os horários é de 23 horas' }),

    startsAt: z.coerce.date().min(today, {
      message: 'Selecione uma data de início para o cuidado',
    }),

    endsAt: z.coerce.date().nullable().default(null),

    isContinuous: z.boolean().default(false),

    medication: z
      .object({
        validity: z.date({ required_error: 'Selecione uma data de validade' }),

        administrationRoute: z.enum([
          'Oral',
          'Tópico (Pomadas)',
          'Parenteral (Injeções)',
        ]),

        composition: z
          .string({ required_error: 'Campo "Composição" é obrigatório' })
          .trim()
          .min(1, { message: 'Campo "Composição" é obrigatório' })
          .regex(/(\d+) ?(mg|ml|mcg|mg\/g|mg\/ml|g\/ml|mcg\/ml)$/i, {
            message:
              'Digite uma composição válida, contendo o valor e o tipo de medida',
          }),

        dosage: z.coerce
          .number({
            required_error: 'Campo "Dosagem" é obrigatório',
            invalid_type_error: 'Digite uma dosagem válida (apenas números)',
          })
          .positive({
            message:
              'A dosagem precisa ter no mínimo 1 (uma) unidade, independente da medida',
          }),

        measureType: z.enum(['ml', 'comprimido', 'camada']),
      })
      .optional(),

    hygiene: z
      .object({
        hygieneCategory: z.enum(['']),
        dedicatedTime: z.coerce.number(),
      })
      .optional(),

    alimentation: z
      .object({
        meal: z.enum(['Café da manhã', 'Almoço', 'Janta', 'Lanche']),
        food: z
          .string({
            required_error: 'Campo "Alimentos da refeição" é obrigatório',
          })
          .min(1, { message: 'Campo "Alimentos da refeição" é obrigatório' }),
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
