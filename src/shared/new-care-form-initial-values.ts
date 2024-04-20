import { NewCareFormData } from './interfaces/new-care-form-data-type'

export const newCareFormInitialValues: NewCareFormData = {
  careDays: [],
  category: 'medicação',
  title: '',
  description: '',
  frequency: 'diariamente',
  startTime: null,
  scheduleType: 'variable',
  interval: '',
  startsAt: null,
  endsAt: null,
  isContinuous: false,
  medication: {
    administrationRoute: 'oral',
    quantity: '',
    unit: 'ml',
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
