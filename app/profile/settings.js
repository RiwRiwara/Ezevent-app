import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function settings() {
  return (
    <View>
      <Text>Settings</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
