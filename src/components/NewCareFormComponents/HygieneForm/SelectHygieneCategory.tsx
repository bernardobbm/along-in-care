import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData } from '../../../screens/NewCareForm'

type SelectHygieneCategoryFormProps = {
  hygieneCategories: string[]
}

export function SelectHygieneCategory({
  hygieneCategories,
}: SelectHygieneCategoryFormProps) {
  const { values, handleChange } = useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.hygiene.hygieneCategory}
        onValueChange={handleChange('hygiene.hygieneCategory')}
        style={{
          backgroundColor: '#28282d',
          color: '#eaeaea',
        }}
      >
        {hygieneCategories.map((hygieneCategory) => {
          return (
            <Picker.Item
              key={hygieneCategory}
              style={{
                backgroundColor: '#28282d',
                fontSize: 18,
                color: '#eaeaea',
              }}
              label={hygieneCategory}
              value={hygieneCategory.toLocaleLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}
