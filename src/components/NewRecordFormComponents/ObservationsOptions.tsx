import { useFormikContext } from 'formik'
import { useState } from 'react'
import { View } from 'react-native'
import { NewRecordFormDataType } from '../../shared/interfaces/new-record-form-data-type'
import { Checkbox } from '../Checkbox'
import { Input } from '../Input'
import { ErrorMessage } from '../NewCareFormComponents/ErrorMessageForm'

const difficultiesList = [
  'O paciente se recusou a realizar o processo',
  'O paciente realizou o processo com dificuldades',
  'O paciente não realizou o processo por força maior (doença, comorbidade momentânea, etc)',
  'Outro',
]

export function ObservationsOptions() {
  const [lastSelected, setLastSelected] = useState<number>()

  const { values, handleChange, errors, touched, setFieldValue } =
    useFormikContext<NewRecordFormDataType>()

  return (
    <View className="mt-5 space-y-2">
      {difficultiesList.map((difficulty, index) => (
        <Checkbox
          key={`${difficulty} - ${index}`}
          type="radio"
          labelSize="sm"
          error={!!(errors.observations && touched.observations)}
          title={difficulty}
          checked={lastSelected === index}
          onPress={() => {
            if (!(lastSelected === index)) {
              setLastSelected(index)

              if (index === 3) {
                setFieldValue('observations', '')
                return
              }

              setFieldValue('observations', difficulty)
            }
          }}
        />
      ))}

      {lastSelected === 3 ? (
        <Input
          multiline
          placeholder="Adicione uma observação sobre o cuidado"
          error={!!(errors.observations && touched.observations)}
          errorMessage={errors.observations}
          value={values.observations}
          onChangeText={handleChange('observations')}
        />
      ) : null}

      {errors.observations && touched.observations && lastSelected !== 3 && (
        <ErrorMessage>{errors.observations}</ErrorMessage>
      )}
    </View>
  )
}
