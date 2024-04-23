import * as yup from 'yup'

export const newRecordFormSchema = yup.object({
  wasAccomplished: yup.boolean(),
  description: yup
    .string()
    .trim()
    .required('Descreva como foi a realização do cuidado'),
})
