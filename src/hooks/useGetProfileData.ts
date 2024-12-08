import { useQuery } from '@tanstack/react-query'
import { api } from '../libs/api'
import { CaregiverDataAxiosResponse } from '../shared/interfaces/caregiver-data-axios-response'

interface FetchCaregiverDataResponse {
  caregiver: CaregiverDataAxiosResponse
}

export function useGetProfileData() {
  async function fetchProfileData() {
    const { data } = await api.get<FetchCaregiverDataResponse>(`/me`)

    return data
  }

  const query = useQuery({
    queryKey: ['profileData'],
    queryFn: fetchProfileData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
