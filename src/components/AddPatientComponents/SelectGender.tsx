import { useFormikContext } from 'formik'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { AddPatientDataType } from '../../shared/interfaces/add-patient-form-data-type'
import { Checkbox } from '../Checkbox'

export function SelectGender() {
  const [isMale, setIsMale] = useState<boolean>(false)
  const [isFemale, setIsFemale] = useState<boolean>(true)

  const { setFieldValue, values } = useFormikContext<AddPatientDataType>()

  function handleToggleGender() {
    setIsMale((prevState) => !prevState)
    setIsFemale((prevState) => !prevState)
  }

  return (
    <View className="mt-4">
      <Text className="mb-4 font-label text-base text-gray-50">
        Selecione o sexo:
      </Text>

      <View className="flex-row">
        <Checkbox
          className="mr-6"
          title="Masculino"
          checked={isMale}
          onPress={() => {
            handleToggleGender()

            if (values.gender === 'masculino') {
              return setFieldValue('gender', 'feminino')
            }

            setFieldValue('gender', 'masculino')
          }}
        />

        <Checkbox
          title="Feminino"
          checked={isFemale}
          onPress={() => {
            handleToggleGender()

            if (values.gender === 'feminino') {
              return setFieldValue('gender', 'masculino')
            }

            setFieldValue('gender', 'feminino')
          }}
        />
      </View>
    </View>
  )
}
