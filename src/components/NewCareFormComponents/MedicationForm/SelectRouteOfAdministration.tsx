import { Picker } from '@react-native-picker/picker'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { FormFieldHookForm } from '..'

type SelectRouteOfAdministrationProps = FormFieldHookForm & {
  routesOfAdministration: string[]
}

export function SelectRouteOfAdministration({
  control,
  routesOfAdministration,
}: SelectRouteOfAdministrationProps) {
  return (
    <Controller
      name="medication.administrationRoute"
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
            {routesOfAdministration.map((route) => {
              return (
                <Picker.Item
                  key={route}
                  style={{
                    backgroundColor: '#28282d',
                    fontSize: 18,
                    color: '#eaeaea',
                  }}
                  label={route}
                  value={route.toLocaleLowerCase()}
                />
              )
            })}
          </Picker>
        </View>
      )}
    />
  )
}
