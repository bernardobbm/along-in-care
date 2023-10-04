import { AntDesign } from '@expo/vector-icons'
import { View } from 'react-native'

import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'
import { NewCareSelectDays } from './NewCareSelectDays'

export function NewCare() {
  return (
    <View className="flex-1 bg-gray-900">
      <Header
        text={'Adicionar novo cuidado'}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
          />
        }
      />

      <NewCareSelectDays />
    </View>
  )
}
