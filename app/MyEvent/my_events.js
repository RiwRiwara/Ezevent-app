import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function my_events() {
  return (
    <View>
      <Text>My Events</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
