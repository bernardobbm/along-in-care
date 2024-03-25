import { useFormikContext } from 'formik'
import { useState } from 'react'
import { TextInputProps, View } from 'react-native'
import { NewCareFormData } from '../../shared/interfaces/new-care-form-data-type'
import { Input } from '../Input'

type TextInputFormProps = TextInputProps & {
  name: 'title' | 'description'
}

export function TextInputForm({ name, ...rest }: TextInputFormProps) {
  const { values, handleChange, errors, touched } =
    useFormikContext<NewCareFormData>()

  const [height, setHeight] = useState(0)

  const hasErrors = !!(errors[name] && touched[name])

  return (
    <View>
      <Input
        multiline
        error={hasErrors}
        errorMessage={errors[name]}
        value={values[name]}
        onChangeText={handleChange(name)}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        style={{ height: Math.max(35, height) }}
        {...rest}
      />
    </View>
  )
}
