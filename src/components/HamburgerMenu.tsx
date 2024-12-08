import { Ionicons } from '@expo/vector-icons'
import { Menu, Pressable } from 'native-base'
import { View } from 'react-native'

interface HamburgerMenuProps {
  children: string | JSX.Element | JSX.Element[]
}

export function HamburgerMenu({ children }: HamburgerMenuProps) {
  return (
    <View className="justify-center">
      <Menu
        background="#1f1f23"
        maxW="40"
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <Ionicons name="menu" size={24} color="#eaeaea" />
            </Pressable>
          )
        }}
      >
        {children}
      </Menu>
    </View>
  )
}
