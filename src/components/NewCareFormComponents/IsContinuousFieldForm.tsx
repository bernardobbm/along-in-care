import { Controller } from 'react-hook-form'

import { FormFieldHookForm } from '.'
import { Checkbox } from '../Checkbox'

export function IsContinuousFieldForm({ control }: FormFieldHookForm) {
  return (
    <Controller
      name="isContinuous"
      control={control}
      render={({ field: { value = false, onChange } }) => (
        <Checkbox
          title="É contínuo?"
          checked={value}
          onPress={() => onChange(!value)}
        />
      )}
    />
  )
}
