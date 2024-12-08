import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'

import { Spinner, useToast } from 'native-base'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../libs/api'
import { RegisterFormDataType } from '../../shared/interfaces/register-form-data-type'
import { AppError } from '../../utils/AppError'
import { registerFormSchema } from '../../validations/register-form-fields-validation'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const router = useRouter()

  async function handleRegisterFormSubmit(formData: RegisterFormDataType) {
    try {
      setIsLoading(true)

      await api.post('/caregivers', formData)

      toast.show({
        description:
          'Usuário criado com sucesso. Faça login para entrar no app.',
        placement: 'top',
        bgColor: 'green.700',
      })

      router.replace('/(auth)/login')
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
      }

      setIsLoading(false)
    }
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
        <View className="flex-1 bg-gray-900">
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
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner size={'lg'} color="#eaeaea" />
            ) : (
              <Text className="font-body_semibold text-base text-zinc-50">
                Cadastre-se
              </Text>
            )}
          </Button>
        </View>
      )}
    </Formik>
  )
}
