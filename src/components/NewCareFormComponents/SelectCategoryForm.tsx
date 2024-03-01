import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData, formikInitialValues } from '../../screens/NewCareForm'

type SelectCategoryFormProps = {
  categories: string[]
}

export function SelectCategoryForm({ categories }: SelectCategoryFormProps) {
  const { setFieldValue, values, resetForm } =
    useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.category}
        onValueChange={(selectedCategory) => {
          setFieldValue('category', selectedCategory)

          resetForm({
            values: { ...formikInitialValues, category: selectedCategory },
          })
        }}
        style={{
          backgroundColor: '#28282d',
          color: '#eaeaea',
        }}
      >
        {categories.map((category) => {
          return (
            <Picker.Item
              key={category}
              style={{
                backgroundColor: '#28282d',
                fontSize: 18,
                color: '#eaeaea',
              }}
              label={category}
              value={category.toLocaleLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}
