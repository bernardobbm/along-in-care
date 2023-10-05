import { Controller, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox'

export function IsContinuousFieldForm() {
  const { control } = useForm()

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
