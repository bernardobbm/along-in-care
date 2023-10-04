import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'

export function SelectCategoryForm() {
  return (
    <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
      <Picker
        dropdownIconColor="#56565a"
        mode="dropdown"
        style={{
          backgroundColor: '#28282d',
          color: '#56565a',
        }}
      >
        <Picker.Item
          style={{
            backgroundColor: '#28282d',
            color: '#56565a',
          }}
          label="Medicação"
          value="medicação"
        />
        <Picker.Item
          style={{
            backgroundColor: '#28282d',
            color: '#56565a',
          }}
          label="Higiene"
          value="higiene"
        />
        <Picker.Item
          style={{
            backgroundColor: '#28282d',
            color: '#56565a',
          }}
          label="Alimentação"
          value="alimentação"
        />
      </Picker>
    </View>
  )
}
