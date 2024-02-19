import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function manage_account() {
  return (
    <View>
      <Text>Manage account</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
