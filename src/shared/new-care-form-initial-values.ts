import { NewCareFormData } from './interfaces/new-care-form-data-type'

export const newCareFormInitialValues: NewCareFormData = {
  careDays: [],
  category: '',
  title: '',
  description: '',
  scheduleType: 'variável',
  schedule: '',
  startsAt: null, // iniciando como nulo apenas para funcionamento da tipagem
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
