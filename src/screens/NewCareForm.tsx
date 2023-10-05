import { AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'
import { Form } from '../components/NewCareFormComponents'

export function NewCareForm() {
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

        <Form.DateField>
          <Form.Field>
            <Form.Label>Data de Inicio:</Form.Label>
            <Form.StartsAt />
          </Form.Field>

          <Form.Field>
            <Form.Label>Data de Finalização:</Form.Label>
            <Form.StartsAt />
          </Form.Field>
        </Form.DateField>

        <Form.Field>
          <Form.IsContinuous />
        </Form.Field>
      </Form.Root>
    </ScrollView>
  )
}
