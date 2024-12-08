import { useFormikContext } from 'formik'
import { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { NewCareFormData } from '../../../shared/interfaces/new-care-form-data-type'
import { ErrorMessage } from '../ErrorMessageForm'

type NotRecommendedFoodProps = TextInputProps

export function NotRecommendedFoodInput({ ...rest }: NotRecommendedFoodProps) {
  const { values, handleChange, errors, touched } =
    useFormikContext<NewCareFormData>()

  const [height, setHeight] = useState(0)

  return (
    <View>
      <TextInput
        className={`w-full rounded-md border-2 bg-gray-600 px-4 py-3 font-label text-base text-gray-50 ${
          errors.alimentation?.food && touched.alimentation?.food
            ? 'border-[#e83f5b]'
            : 'border-gray-400'
        }`}
        multiline
        value={values.alimentation.notRecommendedFood}
        onChangeText={handleChange('alimentation.notRecommendedFood')}
        cursorColor={'#eaeaea'}
        placeholderTextColor={'#56565a'}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        style={{ height: Math.max(35, height) }}
        {...rest}
      />

      {errors.alimentation?.notRecommendedFood &&
        touched.alimentation?.notRecommendedFood && (
          <ErrorMessage>{errors.alimentation.notRecommendedFood}</ErrorMessage>
        )}
    </View>
  )
}
