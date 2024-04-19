import * as yup from 'yup'
import { addPatientFormSchema } from '../../validations/add-patient-form-fields-validation'

export type AddPatientDataType = yup.InferType<typeof addPatientFormSchema>
