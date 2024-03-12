import { Button } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "../../src/i18n/i18n.config";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { COLORS } from "../../config/color";
import Login from "../compo/login";

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
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const snapPoints = useMemo(() => ["95%"], []);

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
                <Login/>
                <Button onPress={() => setIsLoggedIn(true)}>
                  <Text>Login</Text>
                </Button>
              </View>
            </BottomSheet>
          </View>
        </>
      )}
    </View>
  );
};

export default Me;
