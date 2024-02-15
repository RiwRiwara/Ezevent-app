import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function verify_email() {
  return (
    <View>
      <Text>Verify Email</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
