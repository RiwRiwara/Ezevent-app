// Code: app/(tabs)/_layout.js
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Platform, TouchableWithoutFeedback } from "react-native";
import { Text, View, useStyled } from "@gluestack-ui/themed";
import {
  CalendarCheck,
  Inbox,
  FolderClosed,
  UserRound,
  QrCode,
} from "lucide-react-native";

export default () => {
  const styled = useStyled();

  const tabBackground = styled.config.tokens.colors.neutral6;
  const gray0 = styled.config.tokens.colors.gray0;
  const neutral6 = styled.config.tokens.colors.neutral6;

  const [isHeld, setIsHeld] = useState(false);

  const handleLongPress = () => {
    setIsHeld(true);
  };

  const handlePressOut = () => {
    setIsHeld(false);
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS == "ios" ? -35 : 0,
          left: 0,
          right: 0,
          height: Platform.OS == "ios" ? 100 : 70,
          paddingTop: 5,
          elevation: 0,
          backgroundColor: tabBackground,
        },
      }}
    >
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View alignItems="center">
                <CalendarCheck
                  size={focused ? 36 : 30}
                  strokeWidth={2}
                  fill={focused ? gray0 : "none"}
                  color={focused ? neutral6 : gray0}
                />

                <Text
                  fontSize="$2xs"
                  fontWeight={focused ? "$bold" : "$normal"}
                  color="$gray0"
                >
                  Explore
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View alignItems="center">
                <Inbox
                  size={focused ? 36 : 30}
                  strokeWidth={2}
                  fill={focused ? gray0 : "none"}
                  color={focused ? neutral6 : gray0}
                />

                <Text
                  fontSize="$2xs"
                  fontWeight={focused ? "$bold" : "$normal"}
                  color="$gray0"
                >
                  Inbox
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableWithoutFeedback
                onLongPress={handleLongPress}
                onPressOut={handlePressOut}
                delayLongPress={100}
              >
                <View
                  style={{
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: 5,
                  }}
                  bg={isHeld ? "$gray1" : "$gray0"}
                  w={80}
                  h={80}
                  top={Platform.OS == "ios" ? -10 : -20}
                  borderRadius={Platform.OS == "ios" ? 35 : 40}
                  alignItems="center"
                  justifyContent="center"
                  borderWidth= {3}
                  borderColor="$neutral6"
                  shadowColor="$neutral9"

                >
                  <QrCode size={50} strokeWidth={2} color={neutral6} />
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tabs.Screen
        name="myevent"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View alignItems="center">
                <FolderClosed
                  size={focused ? 36 : 30}
                  strokeWidth={2}
                  fill={focused ? gray0 : "none"}
                  color={focused ? neutral6 : gray0}
                />

                <Text
                  fontSize="$2xs"
                  fontWeight={focused ? "$bold" : "$normal"}
                  color="$gray0"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  My Event
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View alignItems="center">
                <UserRound
                  size={focused ? 36 : 30}
                  strokeWidth={2}
                  fill={focused ? gray0 : "none"}
                  color={focused ? neutral6 : gray0}
                />

                <Text
                  fontSize="$2xs"
                  fontWeight={focused ? "$bold" : "$normal"}
                  color="$gray0"
                >
                  Me
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};
