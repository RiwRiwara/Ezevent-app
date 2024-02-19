import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function history_organizer() {
  return (
    <View>
      <Text>History Organizer</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
