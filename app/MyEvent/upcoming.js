import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function upcoming() {
  return (
    <View>
      <Text>Upcoming</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
