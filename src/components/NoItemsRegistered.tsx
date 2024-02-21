import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

interface NoItemsRegisteredProps {
  category: 'Medicamentos' | 'Alimentação' | 'Higiene'
}

export function NoItemsRegistered({ category }: NoItemsRegisteredProps) {
  const { navigate } = useNavigation()

  return (
    <View className="items-center justify-center">
      <Text className="font-body text-lg text-gray-300">
        Sem itens cadastrados em "{category}"
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('AppNewCare')}
      >
        <Text className="font-body text-lg text-[#1C6AA3]">Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}
