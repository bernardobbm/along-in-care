import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { SafeAreaView, Text, View } from 'react-native'

import { SelectDateOfBirth } from '../../components/AddPatientComponents/SelectDateOfBirth'
import { SelectGender } from '../../components/AddPatientComponents/SelectGender'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { HeaderButton } from '../../components/HeaderButton'
import { Input } from '../../components/Input'
import { Form } from '../../components/NewCareFormComponents'
import { AddPatientDataType } from '../../shared/interfaces/add-patient-form-data-type'
import { addPatientFormSchema } from '../../validations/add-patient-form-fields-validation'

export default function AddPatient() {
  const router = useRouter()

  function handleAddPatient(formData: AddPatientDataType) {
    console.log(formData)

    router.back()
  }

  return (
    <Formik
      validationSchema={addPatientFormSchema}
      initialValues={{
        name: '',
        cpf: '',
        gender: 'feminino',
        dateOfBirth: null,
      }}
      onSubmit={handleAddPatient}
    >
      {({ values, handleChange, errors, touched, handleSubmit }) => (
        <SafeAreaView className="flex-1 justify-between bg-gray-900">
          <View>
            <Header
              text="Adicionar paciente"
              button={
                <HeaderButton
                  icon={
                    <AntDesign name="arrowleft" color={'#eaeaea'} size={24} />
                  }
                  onPress={() => router.back()}
                />
              }
            />

            <Input
              label="Nome do paciente:"
              placeholder="Digite o nome do paciente"
              error={!!(errors.name && touched.name)}
              errorMessage={errors.name}
              value={values.name}
              onChangeText={handleChange('name')}
            />

            <Input
              className="w-44"
              label="CPF:"
              placeholder="000.000.000-00"
              error={!!(errors.cpf && touched.cpf)}
              errorMessage={errors.cpf}
              value={values.cpf}
              onChangeText={handleChange('cpf')}
            />

            <SelectGender />

            <View className="mt-1 flex-row">
              <Form.Field>
                <Form.Label>Data de nascimento:</Form.Label>
                <SelectDateOfBirth />
              </Form.Field>

              <View className="ml-8">
                <Form.Field>
                  <Form.Label>Idade:</Form.Label>
                  <Text className="align-self-center mt-2.5 text-3xl text-gray-300">
                    {dayjs(new Date())
                      .diff(values.dateOfBirth, 'year')
                      .toPrecision()
                      .toString() || 0}{' '}
                    anos
                  </Text>
                </Form.Field>
              </View>
            </View>
          </View>

          <Button
            className="mb-16 self-center"
            color="confirm"
            onPress={() => handleSubmit()}
          >
            <Text className="font-body_semibold text-base text-gray-50">
              Adicionar
            </Text>
          </Button>
        </SafeAreaView>
      )}
    </Formik>
  )
}
