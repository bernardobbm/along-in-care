import { View } from 'react-native'

import { CareList } from '../../components/CareList'
import { Header } from '../../components/Header'
import { NoItemsRegistered } from '../../components/NoItemsRegistered'
import { SelectCategoryFilter } from '../../components/SelectCategoryFilter'

export default function Prescriptions() {
  const hasItems = false

  return (
    <View className="h-screen px-8 py-2">
      <Header text="Prescrições" />

      <SelectCategoryFilter />

      {hasItems ? (
        <View className="mt-6">
          {/* // TODO: criar um componente específico para itens de registro */}
          <CareList title={false} category="Medicamentos" />
        </View>
      ) : (
        <View className="h-4/6 justify-center">
          <NoItemsRegistered category={'Medicamentos'} onPress={() => ''} />
        </View>
      )}
    </View>
  )
}
