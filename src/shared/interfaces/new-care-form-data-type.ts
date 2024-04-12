export type NewCareFormData = {
  careDays: number[]
  category: string
  title: string
  description: string
  scheduleType: string
  schedule: string
  frequency: string
  startTime: Date | null
  startsAt: Date | null
  endsAt: Date | null
  isContinuous: boolean
  medication: {
    // validity: Date | null
    // composition: string
    administrationRoute: string
    quantity: string
    unit: string
  }
  hygiene: {
    // dedicatedTime: string
    hygieneCategory: string
    instructions: string
  }
  alimentation: {
    meal: string
    food: string
    notRecommendedFood: string
  }
}
