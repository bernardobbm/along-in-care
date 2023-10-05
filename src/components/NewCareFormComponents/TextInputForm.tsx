import { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

type TextInputFormProps = TextInputProps

export function TextInputForm({ ...rest }: TextInputFormProps) {
  const [height, setHeight] = useState(0)

  return (
    <View>
      <TextInput
        className="w-full rounded-md border-2 border-gray-400 bg-gray-600 px-4 py-3 font-label text-base text-gray-50"
        multiline
        cursorColor={'#eaeaea'}
        placeholderTextColor={'#56565a'}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        style={{ height: Math.max(35, height) }}
        {...rest}
      />
    </View>
  )
}
