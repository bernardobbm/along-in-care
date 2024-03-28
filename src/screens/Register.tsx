import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { LoginDataType } from '../shared/interfaces/login-form-data-type'
import { registerFormSchema } from './validations/register-form-fields-validation'

export function Register() {
  const { navigate } = useNavigation()

  function handleRegisterFormSubmit(formData: LoginDataType) {
    console.log(formData)

    navigate('AppHome')
  }

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleRegisterFormSubmit}
      validationSchema={registerFormSchema}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <View className="h-screen bg-gray-900">
          <View className="h-80 w-screen items-center justify-center space-y-8 rounded-b-[50px] bg-primary px-8">
            <Text className="font-body_semibold text-3xl text-gray-50">
              Cadastre-se
            </Text>

            <Text className="text-center font-body text-lg text-gray-50">
              Cadastre-se para cuidar e conectar-se com seus entes queridos
              idosos.
            </Text>
          </View>

          <ScrollView
            className="mt-8 px-8"
            showsVerticalScrollIndicator={false}
          >
            <Input
              label="Nome:"
              error={!!(errors.name && touched.name)}
              errorMessage={errors.name}
              placeholder="Digite o seu nome"
              value={values.name}
              onChangeText={handleChange('name')}
            />

            <Input
              label="Sobrenome:"
              error={!!(errors.lastName && touched.lastName)}
              errorMessage={errors.lastName}
              placeholder="Digite o seu sobrenome"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            />

            <Input
              label="E-mail:"
              error={!!(errors.email && touched.email)}
              errorMessage={errors.email}
              placeholder="Digite o seu e-mail"
              value={values.email}
              onChangeText={handleChange('email')}
            />

            <Input
              label="Senha:"
              error={!!(errors.password && touched.password)}
              errorMessage={errors.password}
              placeholder="Digite uma senha"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />

            <Input
              label="Confirmar senha:"
              error={!!(errors.confirmPassword && touched.confirmPassword)}
              errorMessage={errors.confirmPassword}
              placeholder="Digite novamente sua senha"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
          </ScrollView>

          <Button
            color="confirm"
            extraClasses="self-center my-5"
            onPress={() => handleSubmit()}
          >
            <Text className="font-body_semibold text-base text-zinc-50">
              Cadastre-se
            </Text>
          </Button>
        </View>
      )}
    </Formik>
  )
}
