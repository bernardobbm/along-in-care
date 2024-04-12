import { NewCareFormData } from './interfaces/new-care-form-data-type'

export const newCareFormInitialValues: NewCareFormData = {
  careDays: [],
  category: 'medicação',
  title: '',
  description: '',
  frequency: 'diariamente',
  startTime: null,
  scheduleType: 'variable',
  schedule: '',
  startsAt: null,
  endsAt: null,
  isContinuous: false,
  medication: {
    administrationRoute: '',
    quantity: '',
    unit: '',
  },
  hygiene: {
    hygieneCategory: '',
    instructions: '',
  },
  alimentation: {
    meal: '',
    food: '',
    notRecommendedFood: '',
  },
}
