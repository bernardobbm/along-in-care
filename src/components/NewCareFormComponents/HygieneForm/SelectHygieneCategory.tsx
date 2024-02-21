import { Picker } from '@react-native-picker/picker'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { FormFieldHookForm } from '..'

type SelectHygieneCategoryFormProps = FormFieldHookForm & {
  hygieneCategories: string[]
}

export function SelectHygieneCategory({
  control,
  hygieneCategories,
}: SelectHygieneCategoryFormProps) {
  return (
    <Controller
      name="hygiene.hygieneCategory"
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
      )}
    />
  )
}
