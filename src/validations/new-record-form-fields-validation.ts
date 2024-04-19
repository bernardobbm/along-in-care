import * as yup from 'yup'

export const newRecordFormSchema = yup.object({
  wasAccomplished: yup.boolean(),
  description: yup
    .string()
    .trim()
    .required('Descreva como foi a realização do cuidado'),
  hasObservations: yup.boolean(),
  observations: yup.string().when('hasObservations', {
    is: true,
    then: (observations) =>
      observations.required(
        'Escolha um dos pontos listados ou descreva em suas palavras a observação',
      ),
  }),
})
