import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { Text, View } from 'react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { LoginDataType } from '../shared/interfaces/login-form-data-type'
import { loginFormSchema } from './validations/login-form-fields-validation'

export function Login() {
  const { navigate } = useNavigation()

  function handleLoginFormSubmit(formData: LoginDataType) {
    console.log(formData)

    navigate('AppHome')
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLoginFormSubmit}
      validationSchema={loginFormSchema}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <View className="h-screen bg-gray-900">
          <View className="h-80 w-screen items-center justify-center space-y-8 rounded-b-[50px] bg-primary px-8">
            <Text className="font-body_semibold text-3xl text-gray-50">
              Login
            </Text>

            <Text className="text-center font-body text-lg text-gray-50">
              Faça login para cuidar e conectar-se com seus entes queridos
              idosos.
            </Text>
          </View>

          <View className="mt-8 px-8">
            <View className="mb-8">
              <Input
                label="E-mail:"
                error={!!(errors.email && touched.email)}
                errorMessage={errors.email}
                placeholder="Digite o seu e-mail de login"
                value={values.email}
                onChangeText={handleChange('email')}
              />

              <Input
                label="Senha:"
                error={!!(errors.password && touched.password)}
                errorMessage={errors.password}
                placeholder="Digite a sua senha"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
              />
            </View>

            <Button
              color="confirm"
              extraClasses="self-center mt-8"
              onPress={() => handleSubmit()}
            >
              <Text className="font-body_semibold text-base text-zinc-50">
                Entrar
              </Text>
            </Button>
          </View>
        </View>
      )}
    </Formik>
  )
}
