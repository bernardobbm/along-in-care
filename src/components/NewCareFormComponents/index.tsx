import { DateFieldForm } from './DateFieldForm'
import { EndsAtFieldForm } from './EndsAtFieldForm'
import { FieldForm } from './FieldForm'
import { IsContinuousFieldForm } from './IsContinuousFieldForm'
import { LabelForm } from './LabelForm'
import { RootForm } from './RootForm'
import { SelectCategoryForm } from './SelectCategoryForm'
import { StartsAtFieldForm } from './StartsAtFieldForm'
import { TextInputForm } from './TextInputForm'

export const Form = {
  Root: RootForm,
  Field: FieldForm,
  Label: LabelForm,
  TextInput: TextInputForm,
  SelectCategory: SelectCategoryForm,
  DateField: DateFieldForm,
  StartsAt: StartsAtFieldForm,
  EndsAt: EndsAtFieldForm,
  IsContinuous: IsContinuousFieldForm,
}
