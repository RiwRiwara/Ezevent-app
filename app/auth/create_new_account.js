import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function create_new_account() {
  return (
    <View>
      <Text>Create new account</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
