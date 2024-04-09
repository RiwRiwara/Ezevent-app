import React from "react";
import { View } from "@gluestack-ui/themed";
import { config } from "../config/gluestack-ui.config";
import { GluestackUIProvider, Text, Image } from "@gluestack-ui/themed";
import { Asset } from "expo-asset";

export default function SplashScreenComponent() {
  return (
    <GluestackUIProvider config={config}>
      <View
        alignItems="center"
        justifyContent="center"
        flex={1}
        backgroundColor="$neutral6"
      >
        <Text></Text>
        <Image
          w={200}
          h={200}
          alt="Splash Screen Logo"
          my={20}
          source={Asset.fromModule(require("@assets/Logo.webp")).uri}
        />

        <Text color="$gray0" fontSize={36} p={10} fontWeight="$bold">
          EZEVENT
        </Text>

        <View w={130} h={8} my={15} backgroundColor="$primary5" />
      </View>
    </GluestackUIProvider>
  );
}
