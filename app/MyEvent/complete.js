import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function complete() {
  return (
    <View>
      <Text>Complete</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
