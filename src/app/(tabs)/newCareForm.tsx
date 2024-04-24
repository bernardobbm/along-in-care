import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'

import { AlimentationForm } from '../../components/CareTypeForms/AlimentationForm'
import { DefaultForm } from '../../components/CareTypeForms/DefaultForm'
import { HygieneForm } from '../../components/CareTypeForms/HygieneForm'
import { MedicationForm } from '../../components/CareTypeForms/MedicationForm'
import { Header } from '../../components/Header'
import { HeaderButton } from '../../components/HeaderButton'
import { Form } from '../../components/NewCareFormComponents'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { newCareFormInitialValues } from '../../shared/new-care-form-initial-values'
import { newCareFormSchema } from '../../validations/new-care-form-fields-validation'

export default function NewCareForm() {
  const router = useRouter()

  function handleNewCareFormSubmit(formData: Partial<NewCareFormData>) {
    if (formData.category === 'medicação') {
      delete formData.alimentation
      delete formData.hygiene
    }

    if (formData.category === 'recomendações alimentares') {
      delete formData.medication
      delete formData.hygiene
    }

    if (formData.category === 'higiene') {
      delete formData.alimentation
      delete formData.medication
    }

    const isStartTimeCloseToNextHour = dayjs(formData.startTime).isAfter(
      new Date(formData.startTime!).setHours(
        formData.startTime!.getHours(),
        44,
      ),
    )

    isStartTimeCloseToNextHour
      ? formData.startsAt?.setUTCHours(formData.startTime!.getUTCHours() + 1, 0)
      : formData.startsAt?.setUTCHours(
          formData.startTime!.getUTCHours(),
          formData.startTime!.getUTCMinutes(),
        )

    if (formData.isContinuous && formData.endsAt) {
      formData.endsAt = null
    }

    console.log(JSON.stringify(formData, null, 2))
  }

  return (
    <Formik
      initialValues={newCareFormInitialValues}
      onSubmit={handleNewCareFormSubmit}
      validationSchema={newCareFormSchema}
    >
      {({ values, resetForm, handleSubmit }) => (
        <View className="h-screen px-8 py-2">
          <Header
            text="Adicionar novo cuidado"
            button={
              <HeaderButton
                icon={<AntDesign name="arrowleft" color="#eaeaea" size={24} />}
                onPress={() => {
                  resetForm()
                  router.replace('/(tabs)/')
                }}
              />
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Form.Root>
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
                resetForm()
                router.replace('/(tabs)/')
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
