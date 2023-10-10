import { Control } from 'react-hook-form'

import { NewCareFormData } from '../../screens/NewCareForm'
import { AffirmativeButtonForm } from './AffirmativeButtonForm'
import { ButtonFieldForm } from './ButtonFieldForm'
import { CancelButtonForm } from './CancelButtonForm'
import { FieldForm } from './FieldForm'
import { IsContinuousFieldForm } from './IsContinuousFieldForm'
import { LabelForm } from './LabelForm'
import { RootForm } from './RootForm'
import { SelectCategoryForm } from './SelectCategoryForm'
import { SelectDateFieldForm } from './SelectDateFiedlForm'
import { TextInputForm } from './TextInputForm'
import { TwoColumnFieldForm } from './TwoColumnFieldForm'

export type FormFieldHookForm = {
  control: Control<NewCareFormData>
  errors?: string
}

export const Form = {
  Root: RootForm,
  Field: FieldForm,
  Label: LabelForm,
  TextInput: TextInputForm,
  SelectCategory: SelectCategoryForm,
  TwoColumnField: TwoColumnFieldForm,
  StartsAt: SelectDateFieldForm,
  EndsAt: SelectDateFieldForm,
  IsContinuous: IsContinuousFieldForm,
  ButtonField: ButtonFieldForm,
  AffirmativeButton: AffirmativeButtonForm,
  CancelButton: CancelButtonForm,
}
