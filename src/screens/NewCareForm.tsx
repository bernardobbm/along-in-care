import { AntDesign } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'
import { z } from 'zod'

import { AlimentationForm } from '../components/CareTypeForms/AlimentationForm'
import { DefaultForm } from '../components/CareTypeForms/DefaultForm'
import { HygieneForm } from '../components/CareTypeForms/HygieneForm'
import { MedicationForm } from '../components/CareTypeForms/MedicationForm'
import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'
import { Form } from '../components/NewCareFormComponents'
import { SelectCareDays } from '../components/SelectCareDays'
import { newCareFormSchema } from './validations/new-care-form-fields-validation'

const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

export type NewCareFormData = z.infer<typeof newCareFormSchema>

export function NewCareForm() {
  const navigation = useNavigation()

  const form = useForm<NewCareFormData>({
    resolver: zodResolver(newCareFormSchema),
    shouldUnregister: true,
  })

  function handleNewCareFormSubmit(form: NewCareFormData) {
    const data = {
      careDays: form.careDays,
      category: form.category,
      title: form.title,
      description: form.description,
      scheduleType: form.scheduleType,
      schedule: form.schedule,
      startsAt: dayjs(form.startsAt)
        .subtract(userTimeZoneDiff, 'hour')
        .toDate(),
      endsAt: !form.isContinuous
        ? dayjs(form.endsAt).subtract(userTimeZoneDiff, 'hour').toDate()
        : null,
      isContinuous: form.isContinuous,

      medicationValidity: form.medication
        ? dayjs(form.medication?.validity)
            .subtract(userTimeZoneDiff, 'hour')
            .toDate()
        : 'não é a categoria de medicação',

      dosage: form.medication?.dosage,
    }

    console.log(data)

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Home' }],
    // })
  }

  const typeForm = form.watch('category')

  return (
    <View className="h-screen bg-gray-900">
      <Header
        text="Adicionar novo cuidado"
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
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
        <FormProvider {...form}>
          <Form.Root>
            <Text className="font-label text-lg text-gray-50">
              Selecione os dias para o cuidado:
            </Text>

            <SelectCareDays />

            <Form.Field>
              <Form.Label>Categoria:</Form.Label>
              <Form.SelectCategory
                categories={['Medicação', 'Higiene', 'Alimentação', 'Outro']}
                control={form.control}
              />
            </Form.Field>

            {typeForm === 'medicação' ? (
              <MedicationForm />
            ) : typeForm === 'alimentação' ? (
              <AlimentationForm />
            ) : typeForm === 'higiene' ? (
              <HygieneForm />
            ) : (
              <DefaultForm />
            )}
          </Form.Root>
        </FormProvider>
      </ScrollView>

      <Form.ButtonField>
        <Form.CancelButton
          text="Cancelar"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }}
        />

        <Form.AffirmativeButton
          text="Adicionar"
          onPress={form.handleSubmit(handleNewCareFormSubmit)}
        />
      </Form.ButtonField>
    </View>
  )
}
