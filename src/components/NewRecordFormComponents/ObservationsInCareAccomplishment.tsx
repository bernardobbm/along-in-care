import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewRecordFormDataType } from '../../shared/interfaces/new-record-form-data-type'
import { Checkbox } from '../Checkbox'
import { ObservationsOptions } from './ObservationsOptions'

export function ObservationsInCareAccomplishment() {
  const { values, setFieldValue } = useFormikContext<NewRecordFormDataType>()

  return (
    <View>
      <Checkbox
        checked={values.hasObservations}
        onPress={() =>
          setFieldValue('hasObservations', !values.hasObservations)
        }
        title="Deseja adicionar uma observação?"
      />

      {values.hasObservations ? <ObservationsOptions /> : null}
    </View>
  )
}
