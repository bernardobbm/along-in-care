import { useQuery } from '@tanstack/react-query'
import { api } from '../../libs/api'
import { RecordDataAxiosResponse } from '../../shared/interfaces/record-data-axios-response'

interface FetchRecordDetailData {
  record: RecordDataAxiosResponse
}

export function useRecordDetailData(id: string) {
  async function fetchRecordDetailData() {
    const { data } = await api.get<FetchRecordDetailData>(`/records/${id}`)

    return data
  }

  const query = useQuery({
    queryKey: ['recordDetailData'],
    queryFn: fetchRecordDetailData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
