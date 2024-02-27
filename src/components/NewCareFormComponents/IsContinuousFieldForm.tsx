import { useFormikContext } from 'formik'
import { NewCareFormData } from '../../screens/NewCareForm'
import { Checkbox } from '../Checkbox'

export function IsContinuousFieldForm() {
  const { values, setFieldValue } = useFormikContext<NewCareFormData>()

  return (
    <Checkbox
      title="É contínuo?"
      checked={values.isContinuous}
      onPress={() => setFieldValue('isContinuous', !values.isContinuous)}
    />
  )
}
