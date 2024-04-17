import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CareList } from '../components/CareList'
import { Header } from '../components/Header'
import { NoItemsRegistered } from '../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../components/SelectCategoryFilter'

export function Records() {
  const { navigate } = useNavigation()

  const hasItems = false

  return (
    <SafeAreaView className="h-screen bg-gray-900 px-8">
      <Header text="Registros" />

      <SelectCategoryFilter />

      {hasItems ? (
        <View className="mt-6">
          {/* // TODO: criar um componente específico para itens de registro */}
          <CareList title={false} category="Medicamentos" />
        </View>
      ) : (
        <View className="h-4/6 justify-center">
          <NoItemsRegistered
            onPress={() => navigate('CareRoutes', { screen: 'NewCareRecord' })}
            category={'Medicamentos'}
          />
        </View>
      )}
    </SafeAreaView>
  )
}
