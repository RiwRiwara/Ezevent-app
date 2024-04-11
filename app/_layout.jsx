// app/_layout.jsx

import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import FontLoader from '../services/FontLoader';
import SplashScreenComponent from './splash';
import { config } from "../config/gluestack-ui.config";
import { GluestackUIProvider, Text, Image, View } from "@gluestack-ui/themed";
import { SafeAreaView } from '@gluestack-ui/themed';
import { SessionProvider } from '../providers/ctx';
import { useTranslation } from "react-i18next";
import { Platform } from 'react-native';

export default function StackLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);
  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <FontLoader>
      <GluestackUIProvider config={config}>
        <SafeAreaView 
        flex={1} 
        pt={Platform.OS !== 'web' ? Platform.OS === 'ios' ? 0 : 0 : 0}

        backgroundColor='$neutral6'>
          <SessionProvider>
            <Stack >
              <Stack.Screen name="(tabs)"
                options={{
                  title: 'Home',
                  headerShown: false
                }}
              />

              <Stack.Screen name="event"
                options={{
                  title: 'Event',
                  headerStyle: {
                    backgroundColor: 'transparent',
                  
                  },
                  headerShown: true,
                }}
              />

            </Stack >
          </SessionProvider>
        </SafeAreaView>
      </GluestackUIProvider>
    </FontLoader>
  );
}

