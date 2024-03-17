export type NewCareFormData = {
  careDays: number[]
  category: string
  title: string
  description: string
  scheduleType: string
  schedule: string
  startsAt: Date | null
  endsAt: Date | null
  isContinuous: boolean
  medication: {
    validity: Date | null
    composition: string
    administrationRoute: string
    quantity: string
    unit: string
  }
  hygiene: {
    hygieneCategory: string
    dedicatedTime: string
  }
  alimentation: {
    meal: string
    food: string
  }
}
