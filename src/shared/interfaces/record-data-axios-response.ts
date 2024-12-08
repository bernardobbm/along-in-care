export interface RecordDataAxiosResponse {
  id: string
  was_accomplished: boolean
  time_of_accomplishment: Date
  description: string
  care_id: string
  care: {
    id: string
    title: string
    category: string
  }
}
