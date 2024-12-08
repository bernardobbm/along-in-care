export interface CareDTO {
  id: string
  category: 'Medicação' | 'Recomendações Alimentares' | 'Higiene' | 'Outros'
  title: string
  description: string
  frequency: string
  startTime: Date | string
  scheduleType: string
  interval: number
  isContinuous: boolean
  startsAt: Date | string
  endsAt: Date | string
  medication?: {
    administrationRoute: string
    quantity: number
    unit: string
  }
  hygiene?: {
    hygieneCategory: string
    instructions: string
  }
  alimentation?: {
    meal: string
    food: string
    notRecommendedFood: string
  }
}
