export interface CareDataAxiosResponse {
  id: string
  category: 'medicação' | 'recomendações alimentares' | 'higiene' | 'outros'
  title: string
  description: string
  frequency: string
  start_time: Date | string
  schedule_type: string
  interval: number
  is_continuous: boolean
  starts_at: Date | string
  ends_at: Date | string
  medication?: {
    administration_route: string
    quantity: number
    unit: string
  }
  hygiene?: {
    hygiene_category: string
    instructions: string
  }
  alimentation?: {
    meal: string
    food: string
    not_recommended_food: string
  }
  weekDays: { week_day: number }[]
}
