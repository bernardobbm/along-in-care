import * as yup from 'yup'

export const addPatientFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, 'O nome deve ter ao menos 3 caracteres')
    .required('O campo "Nome" é obrigatório'),

  cpf: yup
    .string()
    .trim()
    .matches(
      /[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}/,
      'Digite o CPF em um formato válido',
    )
    .required('O campo "CPF" é obrigatório'),

  gender: yup
    .mixed<string>()
    .oneOf(['masculino', 'feminino'], 'Selecione o gênero do paciente'),

  dateOfBirth: yup
    .date()
    .required('É necessário adicionar uma data de nascimento'),
})
