import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function edit_my_profile() {
  return (
    <View>
      <Text>Edit My Profile</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
