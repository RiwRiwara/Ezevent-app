import { Button } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { COLORS } from "../config/color";
import Login from "../app/compo/login";
import Register from "../app/compo/register";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Me = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "grey",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
  });

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false); // State to track login/register mode

  const snapPoints = useMemo(() => ["95%"], []);

  const handleModeChange = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsRegisterMode(!isRegisterMode); // Toggle register mode
  };

  return (
    <View>
      {isLoggedIn ? (
        <>
          {/* Your "me" content goes here */}
          <Button onPress={() => router.push("/profile/settings")}>
            <Text>{t("setting")}</Text>
          </Button>
          <Button onPress={() => setIsLoggedIn(false)}>
            <Text>Logout</Text>
          </Button>
        </>
      ) : (
        <>
          {/* Login page content */}
          <View>
            <BottomSheet
              snapPoints={snapPoints}
              enablePanDownToClose={true}
              backgroundStyle={{ backgroundColor: COLORS.gray0 }}
            >
              <View style={{ padding: 30 }}>
                <Login />
                <Button onPress={() => setIsLoggedIn(true)}>
                  <Text>Test Login</Text>
                </Button>
              </View>
            </BottomSheet>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Keep this for horizontal arrangement
    justifyContent: "space-between", // Align icons to opposite sides
  },
  text: {
    alignItems: "left",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary6,
  },
  description: {
    fontSize: 16,
    color: COLORS.primary7, // Light text
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10, // Rounded corners
  },
});

export default Me;