import { useFormikContext } from 'formik'
import { View } from 'react-native'

import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { Checkbox } from '../Checkbox'

export function IsContinuousFieldForm() {
  const { setFieldValue, values } = useFormikContext<NewCareFormData>()

  return (
    <View className="flex-row">
      <Checkbox
        className="mr-6"
        title="Sim"
        checked={values.isContinuous}
        onPress={() => setFieldValue('isContinuous', !values.isContinuous)}
      />

      <Checkbox
        title="Não"
        checked={!values.isContinuous}
        onPress={() => setFieldValue('isContinuous', !values.isContinuous)}
      />
    </View>
  )
}
