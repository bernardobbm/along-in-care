import { ReactNode } from 'react'
import { Text } from 'react-native'

type ErrorMessageForm = {
  children: ReactNode
}

function ErrorMessageForm({ children }: ErrorMessageForm) {
  return (
    <Text className="mt-2 w-auto flex-wrap font-body text-sm text-primaryRed">
      {children}
    </Text>
  )
}

export { ErrorMessageForm as ErrorMessage }
