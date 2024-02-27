import dayjs from 'dayjs'
import * as yup from 'yup'

const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

const today = dayjs(new Date())
  .startOf('day')
  .subtract(userTimeZoneDiff, 'hours')
  .toDate()

export const newCareFormSchema = yup.object().shape({
  careDays: yup
    .array(yup.number().min(0).max(6))
    .min(1, 'É necessário informar ao menos um dia para realização do cuidado')
    .required(
      'É necessário informar ao menos um dia para realização do cuidado',
    ),

  category: yup
    .mixed<string>()
    .oneOf(['medicação', 'alimentação', 'higiene', 'outro']),

  title: yup
    .string()
    .trim()
    .min(1, 'Campo "Título" é obrigatório')
    .required('Campo "Título" é obrigatório'),

  description: yup
    .string()
    .trim()
    .min(1, 'Campo "Descrição" é obrigatório')
    .required('Campo "Descrição" é obrigatório'),

  scheduleType: yup.mixed().oneOf(['fixo', 'variável']),

  schedule: yup
    .number()
    .typeError('Digite um horário válido (apenas números)')
    .moreThan(-1, 'O horário não pode ser um valor negativo')
    .max(23, 'O limite para os horários é de 23 horas')
    .when('scheduleType', {
      is: 'variável',
      then: (schedule) =>
        schedule.moreThan(
          0,
          'O intervalo de horas para horários variáveis devem ser de no mínimo 1 hora',
        ),
    })
    .required('Campo "Horário" é obrigatório'),

  startsAt: yup
    .date()
    .min(today, 'Selecione uma data de início para o cuidado')
    .required('Selecione uma data de início para o cuidado'),

  endsAt: yup
    .date()
    .min(
      yup.ref('startsAt'),
      'A data de finalização precisa ser igual ou após a data de inicio',
    )
    .nullable()
    .when('isContinuous', {
      is: false,
      then: (endsAt) => endsAt.required('Selecione uma data de finalização'),
    }),

  isContinuous: yup.boolean().default(false),

  medication: yup
    .object()
    .shape({
      validity: yup.date().required('Selecione uma data de validade'),

      administrationRoute: yup
        .mixed<string>()
        .oneOf(['Oral', 'Tópico (Pomadas)', 'Parenteral (Injeções)']),

      composition: yup
        .string()
        .trim()
        .min(1, 'Campo "Composição" é obrigatório')
        .matches(
          /(\d+) ?(mg|ml|mcg|mg\/g|mg\/ml|g\/ml|mcg\/ml)$/i,
          'Digite uma composição válida, contendo o valor e o tipo de medida',
        )
        .required('Campo "Composição" é obrigatório'),

      dosage: yup
        .number()
        .positive(
          'A dosagem precisa ter no mínimo 1 (uma) unidade, independente da medida',
        )
        .typeError('Digite uma dosagem válida (apenas números)')
        .required('Campo "Dosagem" é obrigatório'),

      measureType: yup.mixed<string>().oneOf(['ml', 'comprimido', 'camada']),
    })
    .optional()
    .default({}),

  hygiene: yup
    .object()
    .shape({
      // todo: adicionar mais categorias e validações
      hygieneCategory: yup.mixed<string>().oneOf(['Banho, Dentes, ...']),
      dedicatedTime: yup.number(),
    })
    .optional()
    .default({}),

  // alimentation: yup
  //   .object({
  //     meal: yup.mixed<string>().oneOf(['Café da manhã', 'Almoço', 'Janta', 'Lanche']),
  //     food: yup
  //       .string()
  //       .min(1, 'Campo "Alimentos da refeição" é obrigatório')
  //       .required('Campo "Alimentos da refeição" é obrigatório'),
  //   })
  //   .optional()
  //   .default({}),
})
