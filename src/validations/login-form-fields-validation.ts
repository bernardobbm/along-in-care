import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
  // email: yup
  //   .string()
  //   .email('O e-mail digitado deve ser válido')
  //   .required('O campo "E-mail" não pode estar vazio'),
  // password: yup.string().required('O campo "Senha" não pode estar vazio'),
})
