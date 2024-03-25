import * as yup from 'yup'

export const registerFormSchema = yup.object().shape({
  name: yup.string().trim().required('O campo "Nome" é obrigatório'),
  lastName: yup.string().trim().required('O campo "Sobrenome" é obrigatório'),
  email: yup
    .string()
    .trim()
    .email('O e-mail digitado deve ser válido')
    .required('O campo "E-mail" é obrigatório'),
  password: yup.string().trim().required('O campo "Senha" é obrigatório'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('confirmPassword')], 'As senhas devem ser iguais')
    .required('O campo "Confirmar senha" é obrigatório'),
})
