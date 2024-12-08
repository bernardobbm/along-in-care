import { useQuery } from '@tanstack/react-query'
import { api } from '../libs/api'
import { PatientDataAxiosResponse } from '../shared/interfaces/patient-data-axios-response'

interface FetchPatientDataResponse {
  patient: PatientDataAxiosResponse
}

export function useGetPatientData() {
  async function fetchPatientData() {
    const { data } = await api.get<FetchPatientDataResponse>(`/me/patient`)

    return data
  }

  const query = useQuery({
    queryKey: ['patientData'],
    queryFn: fetchPatientData,
    refetchOnWindowFocus: 'always',
    refetchOnMount: 'always',
  })

  return query
}
