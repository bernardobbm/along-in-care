import { Picker } from '@react-native-picker/picker'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { FormFieldHookForm } from '..'

type SelectMeasureTypeProps = FormFieldHookForm & {
  measureType: string[]
}

export function SelectMeasureType({
  control,
  measureType,
}: SelectMeasureTypeProps) {
  return (
    <Controller
      name="medication.measureType"
      control={control}
      render={({ field: { onChange, value } }) => (
        <View className="h-12 w-40 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
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
      )}
    />
  )
}
