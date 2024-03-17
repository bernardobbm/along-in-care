import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'

type SelectUnitProps = {
  units: string[]
}

export function SelectUnit({ units }: SelectUnitProps) {
  const { values, handleChange } = useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 w-40 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.medication.unit}
        onValueChange={handleChange('medication.unit')}
        style={{
          backgroundColor: '#28282d',
          color: '#eaeaea',
        }}
      >
        {units.map((unit) => {
          return (
            <Picker.Item
              key={unit}
              style={{
                backgroundColor: '#28282d',
                fontSize: 18,
                color: '#eaeaea',
              }}
              label={unit}
              value={unit.toLocaleLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}
