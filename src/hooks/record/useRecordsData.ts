import { useQuery } from '@tanstack/react-query'
import { api } from '../../libs/api'
import { RecordDataAxiosResponse } from '../../shared/interfaces/record-data-axios-response'

interface FetchRecordData {
  records: RecordDataAxiosResponse[]
}

export function useRecordsData(patientId: string) {
  async function fetchRecordsData() {
    const { data } = await api.get<FetchRecordData>(
      `/patient/records/${patientId}`,
    )

    return data
  }

  const query = useQuery({
    queryKey: ['recordsData'],
    queryFn: fetchRecordsData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
