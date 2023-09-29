import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

interface CareListProps {
  category: 'Medicamentos' | 'Alimentação' | 'Higiene'
}

export function CareList({ category }: CareListProps) {
  return (
    <View className="mb-8 gap-5">
      <Text className="font-body text-xl text-gray-50">{category}</Text>

      <View className="items-center justify-center">
        <Text className="font-body text-lg text-gray-300">
          Sem itens cadastrados em “Alimentação”
        </Text>

        <Link href={'/home'} asChild>
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="font-body text-lg text-[#1C6AA3]">Adicionar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
