import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

type ListItemProps = {
  title: string
  description: string
  href: string
}

export function CareListItem({ title, description, href }: ListItemProps) {
  return (
    <Link href="/(stack)/careDetails/123" asChild>
      <TouchableOpacity
        activeOpacity={0.7}
        className="h-24 w-fit flex-row overflow-hidden rounded-lg bg-gray-700"
      >
        <View className="aspect-square h-fit items-center justify-center bg-gray-600 px-3">
          {/* //todo: colocar algum ícone aqui */}
          <Text className="text-white">TO DO: Icon here</Text>
        </View>

        <View className="flex-1 justify-center px-4">
          {/* title */}
          <Text
            className="font-title text-base text-gray-50"
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
    </Link>
  )
}
