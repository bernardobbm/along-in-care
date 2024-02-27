import { Text, TouchableOpacity, View } from 'react-native'

export function CareListItem() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-28 w-fit flex-row overflow-hidden rounded-lg bg-gray-700"
    >
      <View className="aspect-square h-fit bg-gray-600">
        {/* //todo: colocar algum ícone aqui */}
      </View>

      <View className="flex-1 px-5 py-2.5">
        {/* title */}
        <Text
          className="font-title text-lg text-gray-50"
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          Medicamento Higiene Alimentação
        </Text>

        {/* description */}
        <Text
          className="mt-2 font-body text-base text-gray-50"
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          rem consequatur nisi culpa iusto, dolorum minima vero. Sunt eligendi
          nisi accusamus necessitatibus, corporis itaque commodi illo. Minima
          doloribus fugit impedit.
        </Text>
      </View>
    </TouchableOpacity>
  )
}
