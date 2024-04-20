import { Text, TouchableOpacity, View } from 'react-native'

interface NoItemsRegisteredProps {
  category: string
  onPress: () => void
}

export function NoItemsRegistered({
  category,
  onPress,
}: NoItemsRegisteredProps) {
  return (
    <View className="items-center justify-center">
      <Text className="font-body text-lg text-gray-300">
        Sem itens cadastrados {category === '' ? null : `em "${category}"`}
      </Text>

      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text className="font-body text-lg text-primary">Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}
