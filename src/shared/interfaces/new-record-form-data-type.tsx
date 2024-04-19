import * as yup from 'yup'
import { newRecordFormSchema } from '../../validations/new-record-form-fields-validation'

export type NewRecordFormDataType = yup.InferType<typeof newRecordFormSchema>
