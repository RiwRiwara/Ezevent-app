import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function explore() {
  return (
    <View>
      <Text>Explore</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
