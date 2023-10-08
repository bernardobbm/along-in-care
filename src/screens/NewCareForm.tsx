import { AntDesign } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import { z } from 'zod'

import { AlimentationForm } from '../components/CareTypeForms/AlimentationForm'
import { DefaultForm } from '../components/CareTypeForms/DefaultForm'
import { HygieneForm } from '../components/CareTypeForms/HygieneForm'
import { MedicationForm } from '../components/CareTypeForms/MedicationForm'
import { Header } from '../components/Header'
import { HeaderButton } from '../components/HeaderButton'
import { Form } from '../components/NewCareFormComponents'

const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

const today = dayjs(new Date())
  .startOf('day')
  .subtract(userTimeZoneDiff, 'hours')
  .toDate()

const newCareFormSchema = z
  .object({
    category: z.enum(['medicação', 'alimentação', 'higiene', 'outro']),

    title: z.string({ required_error: 'Campo "Título" é obrigatório' }).trim(),

    description: z
      .string({ required_error: 'Campo "Descrição" é obrigatório' })
      .trim(),

    startsAt: z.coerce.date().min(today, {
      message: 'Selecione uma data de inicio válida',
    }),

    endsAt: z.coerce.date().nullable(),

    isContinuous: z.boolean().default(false),
  })
  .refine(
    ({ isContinuous, endsAt }) => {
      if (!isContinuous) {
        return endsAt !== null
      }

      return true
    },
    {
      path: ['endsAt'],
      message: 'Selecione uma data de finalização',
    },
  )
  .refine(
    ({ startsAt, endsAt }) => {
      if (endsAt) {
        return dayjs(endsAt).isAfter(startsAt)
      }

      return true
    },
    {
      path: ['endsAt'],
      message:
        'A data de finalização precisa ser igual ou após a data de inicio',
    },
  )

export type NewCareFormData = z.infer<typeof newCareFormSchema>

export function NewCareForm() {
  const navigation = useNavigation()

  const form = useForm<NewCareFormData>({
    resolver: zodResolver(newCareFormSchema),
  })

  function handleNewCareFormSubmit({
    category,
    title,
    description,
    startsAt,
    endsAt,
    isContinuous,
  }: NewCareFormData) {
    const data = {
      category,
      title,
      description,
      startsAt: dayjs(startsAt).subtract(userTimeZoneDiff, 'hour').toDate(),
      endsAt: !isContinuous
        ? dayjs(endsAt).subtract(userTimeZoneDiff, 'hour').toDate()
        : null,
      isContinuous,
    }

    console.log(data)
  }

  const typeForm = form.watch('category')

  return (
    <View className="h-screen bg-gray-900">
      <Header
        text={'Adicionar novo cuidado'}
        button={
          <HeaderButton
            icon={<AntDesign name="arrowleft" color={'#eaeaea'} size={24} />}
          />
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FormProvider {...form}>
          <Form.Root>
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
