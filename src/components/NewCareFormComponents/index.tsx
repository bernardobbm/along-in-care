import { Button } from '../Button'
import { FoodsInput } from './AlimentationForm/FoodsInput'
import { NotRecommendedFoodInput } from './AlimentationForm/NotRecomendedFoodInput'
import { SelectMealType } from './AlimentationForm/SelectMealType'
import { ButtonFieldForm } from './ButtonFieldForm'
import { FieldForm } from './FieldForm'
import { HygieneInstructions } from './HygieneForm/HygieneInstructions'
import { SelectHygieneCategory } from './HygieneForm/SelectHygieneCategory'
import { IsContinuousFieldForm } from './IsContinuousFieldForm'
import { LabelForm } from './LabelForm'
import { Composition } from './MedicationForm/Composition'
import { Quantity } from './MedicationForm/Quantity'
import { SelectRouteOfAdministration } from './MedicationForm/SelectRouteOfAdministration'
import { SelectUnit } from './MedicationForm/SelectUnit'
import { Validity } from './MedicationForm/Validity'
import { RootForm } from './RootForm'
import { ScheduleFrequency } from './ScheduleFrequency'
import { SelectCategoryForm } from './SelectCategoryForm'
import { SelectDateFieldForm } from './SelectDateFieldForm'
import { TextInputForm } from './TextInputForm'
import { TwoColumnFieldForm } from './TwoColumnFieldForm'

export const Form = {
  Root: RootForm,
  Field: FieldForm,
  Label: LabelForm,
  TextInput: TextInputForm,
  SelectCategory: SelectCategoryForm,
  TwoColumnField: TwoColumnFieldForm,
  ScheduleFrequency,
  StartsAt: SelectDateFieldForm,
  EndsAt: SelectDateFieldForm,
  IsContinuous: IsContinuousFieldForm,
  ButtonField: ButtonFieldForm,
  AffirmativeButton: Button,
  CancelButton: Button,
  MedicationForm: {
    Validity,
    Composition,
    SelectRouteOfAdministration,
    Quantity,
    SelectUnit,
  },
  HygieneForm: {
    SelectHygieneCategory,
    Instructions: HygieneInstructions,
  },
  AlimentationForm: {
    SelectMealType,
    FoodsInput,
    NotRecommendedFoodInput,
  },
}
