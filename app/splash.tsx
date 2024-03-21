import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { config } from "../config/gluestack-ui.config";
import { GluestackUIProvider, Text, Image } from "@gluestack-ui/themed";

export default function SplashScreenComponent() {
  return (
    <GluestackUIProvider config={config}>
      <View
        alignItems="center"
        justifyContent="center"
        flex={1}
        backgroundColor="$neutral6"
      >
        <Image w={200} h={200} my={20} source={require("../assets/Logo.png")} />
        <Text color="$gray0" fontSize={36} fontWeight="$bold">
          EZEVENT
        </Text>
        <View w={130} h={5} my={20} backgroundColor="$primary5" />
      </View>
    </GluestackUIProvider>
  );
}
