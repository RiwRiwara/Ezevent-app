// app/_layout.jsx

import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import FontLoader from '../services/FontLoader';
import SplashScreenComponent from './splash';
import { config } from "../config/gluestack-ui.config";
import { GluestackUIProvider, Text, Image, View } from "@gluestack-ui/themed";
import { SafeAreaView } from '@gluestack-ui/themed';
export default function StackLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFontsLoaded(true);
    }, 1000);

    setTimeout(() => {
      setFontError(true);
    }, 1500);
  }, []);

  if (!fontsLoaded && !fontError) {
    return <SplashScreenComponent />;
  }

  return (
    <FontLoader>
      <GluestackUIProvider config={config}>
        <SafeAreaView flex={1} backgroundColor='$neutral6'>
          <Stack >

            <Stack.Screen name="(tabs)"
              options={{ headerShown: false }}
            />
          </Stack >
        </SafeAreaView>
      </GluestackUIProvider>
    </FontLoader>
  );
}

