import AsyncStorage from "@react-native-async-storage/async-storage";

export const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};