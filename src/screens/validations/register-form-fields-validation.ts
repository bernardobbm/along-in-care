import * as yup from 'yup'

export const registerFormSchema = yup.object().shape({
  name: yup.string().trim().required('O campo "Nome" é obrigatório'),
  lastName: yup.string().trim().required('O campo "Sobrenome" é obrigatório'),
  email: yup
    .string()
    .trim()
    .email('O e-mail digitado deve ser válido')
    .required('O campo "E-mail" é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('O campo "Senha" é obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('O campo "Confirmar senha" é obrigatório'),
})
