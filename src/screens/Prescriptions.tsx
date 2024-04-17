import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CareList } from '../components/CareList'
import { Header } from '../components/Header'
import { NoItemsRegistered } from '../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../components/SelectCategoryFilter'

export function Prescriptions() {
  const hasItems = false

  return (
    <SafeAreaView className="h-screen bg-gray-900 px-8">
      <Header text="Prescrições" />

      <SelectCategoryFilter />

      {hasItems ? (
        <View className="mt-6">
          {/* // TODO: criar um componente específico para itens de registro */}
          <CareList title={false} category="Medicamentos" />
        </View>
      ) : (
        <View className="h-4/6 justify-center">
          <NoItemsRegistered category={'Medicamentos'} />
        </View>
      )}
    </SafeAreaView>
  )
}
