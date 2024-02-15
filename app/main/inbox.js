import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function inbox() {
  return (
    <View>
      <Text>Inbox</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
