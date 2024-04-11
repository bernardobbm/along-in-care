import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { Text, View } from 'react-native'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'

type SelectFrequencyProps = {
  frequencies: string[]
}

export function SelectFrequency({ frequencies }: SelectFrequencyProps) {
  const { handleChange, values } = useFormikContext<NewCareFormData>()

  return (
    <View className="w-44">
      <View className="h-12 justify-center overflow-hidden rounded-md border-2 border-gray-400 text-base">
        <Picker
          dropdownIconColor="#56565a"
          mode="dropdown"
          selectedValue={values.frequency}
          onValueChange={handleChange('frequency')}
          style={{
            backgroundColor: '#28282d',
            color: '#eaeaea',
          }}
        >
          {frequencies.map((frequency) => {
            return (
              <Picker.Item
                key={frequency}
                style={{
                  backgroundColor: '#28282d',
                  fontSize: 18,
                  color: '#eaeaea',
                }}
                label={frequency}
                value={frequency.toLocaleLowerCase()}
              />
            )
          })}
        </Picker>
      </View>

      {values.frequency === 'diariamente' ? null : (
        <Text className="mt-2 w-auto flex-wrap font-body text-xs text-gray-200">
          Esse cuidado acontecerá nesse dia{' '}
          {values.frequency === 'mensalmente' ? 'todo mês' : 'todo ano'}
        </Text>
      )}
    </View>
  )
}
