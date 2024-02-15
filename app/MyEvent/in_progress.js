import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function in_progress() {
  return (
    <View>
      <Text>In Progress</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
