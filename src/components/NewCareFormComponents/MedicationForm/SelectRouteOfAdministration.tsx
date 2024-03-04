import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'

type SelectRouteOfAdministrationProps = {
  routesOfAdministration: string[]
}

export function SelectRouteOfAdministration({
  routesOfAdministration,
}: SelectRouteOfAdministrationProps) {
  const { values, handleChange } = useFormikContext<NewCareFormData>()

  return (
    <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        selectedValue={values.medication.administrationRoute}
        onValueChange={handleChange('medication.administrationRoute')}
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
  )
}
