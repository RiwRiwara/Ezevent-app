import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function push_notification() {
  return (
    <View>
      <Text>Push Notification</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
