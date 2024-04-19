import * as yup from 'yup'
import { loginFormSchema } from '../../validations/login-form-fields-validation'

export type LoginDataType = yup.InferType<typeof loginFormSchema>
