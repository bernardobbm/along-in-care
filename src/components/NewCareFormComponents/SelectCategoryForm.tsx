import { Picker } from '@react-native-picker/picker'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { FormFieldHookForm } from '.'

type SelectCategoryFormProps = FormFieldHookForm & {
  categories: string[]
}

export function SelectCategoryForm({
  control,
  categories,
}: SelectCategoryFormProps) {
  return (
    <Controller
      name="category"
      control={control}
      render={({ field: { onChange, value } }) => (
        <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
          <Picker
            dropdownIconColor="#56565a"
            mode="dropdown"
            selectedValue={value}
            onValueChange={onChange}
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
                    color: '#eaeaea',
                  }}
                  label={category}
                  value={category.toLocaleLowerCase()}
                />
              )
            })}
          </Picker>
        </View>
      )}
    />
  )
}
