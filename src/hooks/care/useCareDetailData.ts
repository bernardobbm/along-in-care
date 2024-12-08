import { useQuery } from '@tanstack/react-query'
import { api } from '../../libs/api'
import { CareDataAxiosResponse } from '../../shared/interfaces/care-data-axios-response'

interface FetchCareDetailData {
  care: CareDataAxiosResponse
}

export function useCareDetailData(id: string) {
  async function fetchCareDetailData() {
    const { data } = await api.get<FetchCareDetailData>(`/cares/info/${id}`)

    return data
  }

  const query = useQuery({
    queryKey: ['careDetailData'],
    queryFn: fetchCareDetailData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
