import * as yup from 'yup'
import { registerFormSchema } from '../../validations/register-form-fields-validation'

export type RegisterFormDataType = yup.InferType<typeof registerFormSchema>
