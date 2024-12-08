import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

type ListItemProps = {
  category: 'Medicação' | 'Recomendações Alimentares' | 'Higiene' | 'Outros'
  title: string
  description: string
  id: string
}

export function CareListItem({
  category,
  title,
  description,
  id,
}: ListItemProps) {
  return (
    <Link href={`/(stack)/careDetails/${id}`} asChild>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-4 h-24 w-fit flex-row overflow-hidden rounded-lg bg-gray-700"
      >
        <View className="aspect-square h-fit items-center justify-center bg-gray-600 px-3">
          {category === 'Medicação' ? (
            <FontAwesome5
              name="prescription-bottle-alt"
              size={40}
              color="#eaeaea"
            />
          ) : category === 'Higiene' ? (
            <FontAwesome5 name="hands-wash" size={40} color="#eaeaea" />
          ) : category === 'Recomendações Alimentares' ? (
            <MaterialCommunityIcons
              name="food-variant"
              size={40}
              color="#eaeaea"
            />
          ) : (
            <MaterialIcons name="healing" size={40} color="#eaeaea" />
          )}
        </View>

        <View className="flex-1 justify-center px-4">
          {/* title */}
          <Text
            className="font-title text-base text-gray-50"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {title}
          </Text>

          {/* description */}
          <Text
            className="mt-2 font-body text-base text-gray-50"
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}
