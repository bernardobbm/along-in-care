import { NewCareFormData } from './interfaces/new-care-form-data-type'

export const formikInitialValues: NewCareFormData = {
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
    validity: null, // iniciando como nulo apenas para funcionamento da tipagem
    composition: '',
    administrationRoute: '',
    quantity: '',
    unit: '',
  },
  hygiene: {
    hygieneCategory: '',
    dedicatedTime: '',
  },
  alimentation: {
    meal: '',
    food: '',
    notRecommendedFood: '',
  },
}
