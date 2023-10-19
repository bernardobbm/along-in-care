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

const userTimeZoneDiff = new Date().getTimezoneOffset() / 60

const today = dayjs(new Date())
  .startOf('day')
  .subtract(userTimeZoneDiff, 'hours')
  .toDate()

const tomorrow = dayjs(today)
  .month(today.getDay() + 1)
  .startOf('day')
  .toDate()

const newCareFormSchema = z
  .object({
    careDays: z.array(z.number().min(0).max(6)).min(1, {
      message:
        'É necessário informar ao menos um dia para realização do cuidado',
    }),

    category: z.enum(['medicação', 'alimentação', 'higiene', 'outro']),

    title: z
      .string({ required_error: 'Campo "Título" é obrigatório' })
      .trim()
      .min(1, {
        message: 'Campo "Título" é obrigatório',
      }),

    description: z
      .string({ required_error: 'Campo "Descrição" é obrigatório' })
      .trim()
      .min(1, {
        message: 'Campo "Descrição" é obrigatório',
      }),

    scheduleType: z.enum(['fixo', 'variável']),

    schedule: z
      .string({
        required_error: 'Campo "Horário" é obrigatório',
      })
      .transform((value, ctx) => {
        const parsedValue = parseInt(value)

        if (isNaN(parsedValue)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Digite um horário válido (apenas números)',
          })

          return z.NEVER
        }
        return parsedValue
      })
      .refine((value) => value <= 23, {
        message: 'O limite para os horário é de 23 horas',
      }),

    startsAt: z.coerce.date().min(today, {
      message: 'Selecione uma data de início para o cuidado',
    }),

    endsAt: z.coerce.date().nullable().default(null),

    isContinuous: z.boolean().default(false),

    medication: z
      .object({
        validity: z
          .date({ required_error: 'Selecione uma data de validade' })
          .min(tomorrow, {
            message: 'É necessário informar uma data de validade',
          }),

        dosage: z
          .string({ required_error: 'Campo "Dosagem" é obrigatório' })
          .min(1, { message: 'Campo "Dosagem" é obrigatório' })
          .regex(/(\d+) ?(mg|ml|mcg|mg\/g)$/i, {
            message: 'Digite uma dosagem válida',
          }),
      })
      .optional(),
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
  .refine(
    ({ scheduleType, schedule }) => {
      if (scheduleType === 'variável') {
        return schedule > 0
      }

      return true
    },
    {
      message:
        'O intervalo de horas para horários variáveis devem ser de no mínimo 1 hora',
      path: ['schedule'],
    },
  )

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
        text={'Adicionar novo cuidado'}
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
