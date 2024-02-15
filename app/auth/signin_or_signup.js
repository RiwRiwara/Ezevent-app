import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function signin_or_signup() {
  return (
    <View>
      <Text>SignIn or Signup</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
