import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData } from '../../../screens/NewCareForm'

type SelectMeasureTypeProps = {
  measureType: string[]
}

export function SelectMeasureType({ measureType }: SelectMeasureTypeProps) {
  const { values, handleChange } = useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 w-40 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.medication.measureType}
        onValueChange={handleChange('medication.measureType')}
        style={{
          backgroundColor: '#28282d',
          color: '#eaeaea',
        }}
      >
        {measureType.map((measure) => {
          return (
            <Picker.Item
              key={measure}
              style={{
                backgroundColor: '#28282d',
                fontSize: 18,
                color: '#eaeaea',
              }}
              label={measure}
              value={measure.toLocaleLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}
