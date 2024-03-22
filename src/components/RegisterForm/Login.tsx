import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { AffirmativeButtonForm } from "../NewCareFormComponents/AffirmativeButtonForm";

export function Login() {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>Entre</Text>

      <AffirmativeButtonForm text="teste" onPress={() => navigate('AppHome')} />
    </View>
  )
}