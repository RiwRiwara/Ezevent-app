import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function change_language() {
  return (
    <View>
      <Text>Change language</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
