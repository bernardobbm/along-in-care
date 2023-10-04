import { AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'

export default function NewCareForm() {
  return (
    <ScrollView className="bg-gray-900" showsVerticalScrollIndicator={false}>
      <Header
        text={'Adicionar novo cuidado'}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
          />
        }
      />

      <Form.Root>
        <Form.Field>
          <Form.Label>Categoria:</Form.Label>
          <Form.SelectCategory />
        </Form.Field>

        <Form.Field>
          <Form.Label>Título:</Form.Label>
          <Form.TextInput placeholder="Digite um título para o cuidado" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Descrição:</Form.Label>
          <Form.TextInput placeholder="Descreva o processo deste cuidado" />
        </Form.Field>

        <Form.Field>
          <Form.Label>Data de Inicio:</Form.Label>
        </Form.Field>
      </Form.Root>
    </ScrollView>
  )
}
