import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    <>
      <View className="flex-1 items-center gap-20 bg-gray-900">
        <StatusBar backgroundColor="#1c6aa3" />
        <View className="h-[450px] w-[100vw] items-center justify-center gap-y-10 rounded-b-[50px] bg-[#1c6aa3] px-10">
          {/* substituir por ícone */}
          <View
            style={{
              backgroundColor: '#fff',
              height: 100,
              width: 100,
            }}
          />

          <Text className="text-center text-lg text-gray-50">
            O Along In Care é o aplicativo certo voltado para o cuidado daqueles
            que você ama
          </Text>
        </View>

        <Link href={'/(tabs)/home'} asChild>
          <TouchableOpacity
            className="w-[350px] flex-row items-center justify-center gap-x-5 rounded-xl bg-gray-700"
            activeOpacity={0.7}
          >
            <AntDesign name="google" size={40} color={'#eaeaea'} />
            <Text className="py-5 text-lg text-gray-50">
              Entre com sua conta Google
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  )
}
