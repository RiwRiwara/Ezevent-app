import { Text, View } from "react-native";
import { Link } from "expo-router";


export default function badge() {
  return (
    <View>
      <Text>Badge</Text>
      <Link href="/">Back</Link>

    </View>
  );
}
