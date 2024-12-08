import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

interface RecordListItem {
  id: string
  title: string
  description: string
}

export function RecordListItem({ id, title, description }: RecordListItem) {
  return (
    <Link href={`/(stack)/recordDetails/${id}`} asChild>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-4 h-24 w-fit flex-row overflow-hidden rounded-lg bg-gray-700"
      >
        <View className="aspect-square h-fit items-center justify-center bg-gray-600 px-3">
          <Feather name="file-text" size={40} color="#eaeaea" />
        </View>

        <View className="flex-1 justify-center px-4">
          {/* title */}
          <Text
            className="font-title text-base text-gray-50"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            Registro de "{title}"
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
