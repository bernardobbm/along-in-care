import dayjs from 'dayjs'
import * as yup from 'yup'

const today = dayjs(new Date()).startOf('day').toDate()

const todayOneYearBefore = dayjs(today).add(1, 'year').toDate()

export const newCareFormSchema = yup.object().shape({
  careDays: yup
    .array(yup.number().min(0).max(6))
    .min(1, 'É necessário informar ao menos um dia para realização do cuidado')
    .required(
      'É necessário informar ao menos um dia para realização do cuidado',
    ),

  category: yup
    .mixed<string>()
    .oneOf(['medicação', 'recomendações alimentares', 'higiene', 'outro']),

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

  frequency: yup
    .mixed<string>()
    .oneOf(['diariamente', 'semanalmente', 'mensalmente', 'anualmente']),

  startTime: yup
    .date()
    .required('Selecione um horário de inicio para o cuidado'),

  scheduleType: yup.string(),

  interval: yup
    .number()
    .typeError('Digite um horário válido (apenas números)')
    .moreThan(-1, 'O horário não pode ser um valor negativo')
    .max(23, 'O limite para os horários é de 23 horas')
    .when('scheduleType', {
      is: 'variável',
      then: (interval) =>
        interval
          .moreThan(
            0,
            'O intervalo de horas para horários variáveis devem ser de no mínimo 1 hora',
          )
          .required('Campo "Horário" é obrigatório'),
    }),

  isContinuous: yup.boolean().default(false),

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
      then: (endsAt) =>
        endsAt.required('Selecione uma data de finalização').when('frequency', {
          is: 'anualmente',
          then: (endsAt) =>
            endsAt.min(
              todayOneYearBefore,
              'Em cuidados anuais e não contínuos, o cuidado não pode encerar no mesmo ano de inicio',
            ),
        }),
    }),

  medication: yup.object().when('category', {
    is: 'medicação',
    then: () =>
      yup.object().shape({
        administrationRoute: yup
          .mixed<string>()
          .oneOf(['oral', 'tópico (pomadas)', 'parenteral (injeções)']),

        quantity: yup
          .number()
          .positive(
            'A dosagem precisa ter no mínimo 1 (uma) unidade, independente da medida',
          )
          .typeError('Digite uma dosagem válida (apenas números)')
          .required('Campo "Dosagem" é obrigatório'),

        unit: yup
          .mixed<string>()
          .oneOf(['ml', 'comprimido', 'camada', 'gotas']),
      }),
  }),

  hygiene: yup.object().when('category', {
    is: 'higiene',
    then: () =>
      yup.object().shape({
        hygieneCategory: yup
          .mixed<string>()
          .oneOf([
            'banho',
            'escovação (dentes)',
            'lavar o cabelo',
            'troca de frauda',
          ]),

        instructions: yup
          .string()
          .trim()
          .min(1, 'Campo de instruções é obrigatório')
          .required('Campo de instruções é obrigatório'),
      }),
  }),

  alimentation: yup.object().when('category', {
    is: 'alimentação',
    then: () =>
      yup.object().shape({
        meal: yup
          .mixed<string>()
          .oneOf(['café da manhã', 'almoço', 'janta', 'lanche']),
        food: yup
          .string()
          .min(1, 'Campo "Alimentos da refeição" é obrigatório')
          .required('Campo "Alimentos da refeição" é obrigatório'),

        notRecommendedFood: yup
          .string()
          .min(1, 'Campo "Alimentos não recomendados" é obrigatório')
          .required('Campo "Alimentos não recomendados" é obrigatório'),
      }),
  }),
})
