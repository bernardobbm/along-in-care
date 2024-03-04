import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'

type SelectMealTypeProps = {
  mealTypes: string[]
}

export function SelectMealType({ mealTypes }: SelectMealTypeProps) {
  const { values, handleChange } = useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.alimentation.meal}
        onValueChange={handleChange('alimentation.meal')}
        style={{
          backgroundColor: '#28282d',
          color: '#eaeaea',
        }}
      >
        {mealTypes.map((mealType) => {
          return (
            <Picker.Item
              key={mealType}
              style={{
                backgroundColor: '#28282d',
                fontSize: 18,
                color: '#eaeaea',
              }}
              label={mealType}
              value={mealType.toLocaleLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}
