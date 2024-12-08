import { useQuery } from '@tanstack/react-query'
import { api } from '../../libs/api'
import { CareDataAxiosResponse } from '../../shared/interfaces/care-data-axios-response'
import { useAuth } from '../useAuth'

interface FetchCareDataResponse {
  cares: CareDataAxiosResponse[]
}

export function useCaresData() {
  const {
    caregiver: { patient },
  } = useAuth()

  async function fetchCareData() {
    const { data } = await api.get<FetchCareDataResponse>(`/cares/${patient}`)

    return data
  }

  const query = useQuery({
    queryKey: ['careData'],
    queryFn: fetchCareData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
