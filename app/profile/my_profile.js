import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function my_profile() {
  return (
    <View>
      <Text>My Profile</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
