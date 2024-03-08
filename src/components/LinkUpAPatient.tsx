import { Text, TouchableOpacity, View } from 'react-native'

export function LinkUpAPatient() {
  return (
    <View className="flex-1 items-center justify-center gap-8">
      <Text className="self-center text-center font-body text-xl text-gray-300">
        Você ainda não tem nenhum paciente sob seus cuidados
      </Text>

      <View className="items-center gap-2">
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-body text-lg text-primary">
            Adicione um paciente
          </Text>
        </TouchableOpacity>

        <Text className="font-body text-lg text-gray-300">ou</Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-body text-lg text-primary">
            Vincule-se a um paciente já cadastrado
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
