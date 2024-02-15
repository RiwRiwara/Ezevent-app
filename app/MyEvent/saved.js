import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function saved() {
  return (
    <View>
      <Text>Saved</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
