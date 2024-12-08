import { useFocusEffect } from 'expo-router'
import { useCallback } from 'react'

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )
}
