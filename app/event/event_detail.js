import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function event_detail() {
  return (
    <View>
      <Text>Event Detail</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
