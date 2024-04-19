import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewRecordFormDataType } from '../../shared/interfaces/new-record-form-data-type'
import { Checkbox } from '../Checkbox'

export function SelectCareAccomplishment() {
  const { values, setFieldValue } = useFormikContext<NewRecordFormDataType>()

  return (
    <View className="flex-row gap-8">
      <Checkbox
        title="Sim"
        onPress={() => {
          setFieldValue('wasAccomplished', !values.wasAccomplished)
        }}
        checked={values.wasAccomplished}
        type="radio"
      />

      <Checkbox
        title="Não"
        onPress={() => {
          setFieldValue('wasAccomplished', !values.wasAccomplished)
        }}
        type="radio"
        checked={!values.wasAccomplished}
      />
    </View>
  )
}
