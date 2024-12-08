import { AntDesign } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'

import { useToast } from 'native-base'
import { Button } from '../../../components/Button'
import { Header } from '../../../components/Header'
import { HeaderButton } from '../../../components/HeaderButton'
import { Input } from '../../../components/Input'
import { Form } from '../../../components/NewCareFormComponents'
import { SelectCareAccomplishment } from '../../../components/NewRecordFormComponents/SelectCareAccomplishment'
import { useCareDetailData } from '../../../hooks/care/useCareDetailData'
import { api } from '../../../libs/api'
import { NewRecordFormDataType } from '../../../shared/interfaces/new-record-form-data-type'
import { newRecordFormInitialValues } from '../../../shared/new-record-form-initial-values'
import { AppError } from '../../../utils/AppError'
import { newRecordFormSchema } from '../../../validations/new-record-form-fields-validation'

export default function NewRecordForm() {
  const router = useRouter()

  const toast = useToast()

  const { careId } = useLocalSearchParams()

  const { data } = useCareDetailData(careId as string)

  if (!careId || !data) {
    toast.show({
      description: 'Algo deu errado, tente novamente mais tarde!',
      placement: 'top',
      bgColor: 'danger.700',
    })

    return router.back()
  }

  async function handleNewRecordFormSubmit(formData: NewRecordFormDataType) {
    try {
      await api.post(`/records/${careId}`, {
        ...formData,
        timeOfAccomplishment: new Date(),
      })

      toast.show({
        description: 'Registro criado com sucesso',
        placement: 'top',
        bgColor: 'green.700',
      })

      router.push('/(tabs)/records')
    } catch (err) {
      if (err instanceof AppError) {
        if (!toast.isActive(err.message)) {
          toast.show({
            description: err.message,
            placement: 'top',
            bgColor: 'danger.700',
            id: err.message,
          })
        }

        router.back()
      }
    }
  }

  return (
    <Formik
      initialValues={newRecordFormInitialValues}
      validationSchema={newRecordFormSchema}
      onSubmit={handleNewRecordFormSubmit}
    >
      {({ values, handleChange, errors, touched, resetForm, handleSubmit }) => (
        <View className="h-screen bg-gray-900">
          <Header
            text="Criar um novo registro"
            button={
              <HeaderButton
                icon={
                  <AntDesign name="arrowleft" color={'#eaeaea'} size={24} />
                }
                onPress={() => {
                  resetForm()
                  router.back()
                }}
              />
            }
          />

          <ScrollView>
            <Form.Field>
              <Form.Label>Cuidado:</Form.Label>
              <Text className="font-body text-2xl text-gray-50">
                {data?.care.title}
              </Text>
            </Form.Field>

            <Form.Field>
              <Form.Label>O cuidado foi realizado?</Form.Label>
              <SelectCareAccomplishment />
            </Form.Field>

            <Form.Field>
              <Form.Label>Descrição:</Form.Label>
              <Input
                multiline
                placeholder="Descreva como foi a realização"
                error={!!(errors.description && touched.description)}
                errorMessage={errors.description}
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </Form.Field>
          </ScrollView>

          <Form.ButtonField>
            <Button
              color="cancel"
              onPress={() => {
                resetForm()
                router.back()
              }}
            >
              <Text className="font-body_semibold text-base text-gray-50">
                Cancelar
              </Text>
            </Button>

            <Button color="confirm" onPress={() => handleSubmit()}>
              <Text className="font-body_semibold text-base text-gray-50">
                Criar
              </Text>
            </Button>
          </Form.ButtonField>
        </View>
      )}
    </Formik>
  )
}
