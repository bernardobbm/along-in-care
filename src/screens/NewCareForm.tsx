import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'

import { AlimentationForm } from '../components/CareTypeForms/AlimentationForm'
import { DefaultForm } from '../components/CareTypeForms/DefaultForm'
import { HygieneForm } from '../components/CareTypeForms/HygieneForm'
import { MedicationForm } from '../components/CareTypeForms/MedicationForm'
import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'
import { Form } from '../components/NewCareFormComponents'
import { SelectCareDays } from '../components/SelectCareDays'
import { NewCareFormData } from '../shared/interfaces/new-care-form-data-type'
import { newCareFormInitialValues } from '../shared/new-care-form-initial-values'
import { newCareFormSchema } from './validations/new-care-form-fields-validation'

// const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

export function NewCareForm() {
  const navigation = useNavigation()

  function handleNewCareFormSubmit(formData: NewCareFormData) {
    console.log(formData)
  }

  return (
    <Formik
      initialValues={newCareFormInitialValues}
      onSubmit={handleNewCareFormSubmit}
      validationSchema={newCareFormSchema}
    >
      {({ values, handleSubmit }) => (
        <View className="h-screen bg-gray-900">
          <Header
            text="Adicionar novo cuidado"
            button={
              <HeaderButton
                icon={
                  <AntDesign name="arrowleft" color={'#eaeaea'} size={24} />
                }
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  })
                }
              />
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Form.Root>
              <Text className="font-label text-lg text-gray-50">
                Selecione os dias para o cuidado:
              </Text>

              <SelectCareDays />

              <Form.Field>
                <Form.Label>Categoria:</Form.Label>
                <Form.SelectCategory
                  categories={[
                    'Medicação',
                    'Higiene',
                    'Recomendações Alimentares',
                    'Outro',
                  ]}
                />
              </Form.Field>

              {values.category === 'medicação' ? (
                <MedicationForm />
              ) : values.category === 'recomendações alimentares' ? (
                <AlimentationForm />
              ) : values.category === 'higiene' ? (
                <HygieneForm />
              ) : (
                <DefaultForm />
              )}
            </Form.Root>
          </ScrollView>

          <Form.ButtonField>
            <Form.CancelButton
              color="cancel"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                })
              }}
            >
              <Text className="font-body_semibold text-base text-gray-50">
                Cancelar
              </Text>
            </Form.CancelButton>

            <Form.AffirmativeButton
              color="confirm"
              onPress={() => handleSubmit()}
            >
              <Text className="font-body_semibold text-base text-gray-50">
                Adicionar
              </Text>
            </Form.AffirmativeButton>
          </Form.ButtonField>
        </View>
      )}
    </Formik>
  )
}
