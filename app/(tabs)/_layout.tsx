// Code: app/(tabs)/_layout.js
import React, { useState, useEffect } from "react";
import { Tabs, Stack } from "expo-router";
import { Platform, Pressable, Modal, Button } from "react-native";
import { Text, View, useStyled } from "@gluestack-ui/themed";
import { useSession } from "@providers/ctx";
import { SigninSlideUp } from "@components/auth/SigninSlideUp";
import {
  CalendarCheck,
  Inbox,
  Mail,
  FolderClosed,
  UserRound,
  QrCode,
} from "lucide-react-native";
import QrScan from "@components/qrcode/QrScan";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const { session } = useSession();
  const styled = useStyled();
  const tabBackground = styled.config.tokens.colors.neutral6;
  const gray0 = styled.config.tokens.colors.gray0;
  const neutral6 = styled.config.tokens.colors.neutral6;
  const [isHeld, setIsHeld] = useState(false);
  const [isPreSigninVisible, setIsPreSigninVisible] = useState(false);
  const [showQr, setShowQr] = React.useState(false);
  const handleCloseQr = () => setShowQr(!showQr);
  const [localToken, setLocalToken] = useState(null);

  const toggleModal = () => {
    setIsPreSigninVisible(!isPreSigninVisible);
  };

  const handleLongPress = () => {
    setIsHeld(true);
  };

  const handlePressOut = () => {
    setIsHeld(false);
  };

  const setTabBarButton = (focused: boolean) => {
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
  };

  const onPressTab = (event) => {
    console.log("Token(_Layout) :", localToken);
    if (localToken) {
      // Do nothing
    } else {
      setIsPreSigninVisible(true);
      event.preventDefault();
    }
  };


  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        return token;
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    retrieveToken().then((token) => {
      setLocalToken(token);
    });

  });

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: Platform.OS != "web" ? (Platform.OS == "ios" ? -35 : 0) : 0,
            left: 0,
            right: 0,
            height:
              Platform.OS != "web" ? (Platform.OS == "ios" ? 100 : 70) : 70,
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
          name="explore/calender"
          options={{
            href: null,
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
          listeners={() => ({
            tabPress: (event) => onPressTab(event),
          })}
        />
        <Tabs.Screen
          name="explore/search_result"
          options={{
            href: null,
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
          listeners={() => ({
            tabPress: (event) => onPressTab(event),
          })}
        />
        <Tabs.Screen
          name="(app)/inbox"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View alignItems="center">
                  <Mail
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
          listeners={() => ({
            tabPress: (event) => onPressTab(event),
          })}
        />
        <Tabs.Screen
          name="qr"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => {
              return (
                <Pressable
                  onLongPress={handleLongPress}
                  onPressOut={handlePressOut}
                  delayLongPress={100}
                  onPress={(event) => setShowQr(true)}
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
                    top={
                      Platform.OS != "web"
                        ? Platform.OS == "ios"
                          ? -10
                          : -12
                        : -20
                    }
                    borderRadius={Platform.OS != "web" ? 35 : 40}
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={3}
                    borderColor="$neutral6"
                    shadowColor="$neutral9"
                  >
                    <QrCode size={50} strokeWidth={2} color={neutral6} />
                  </View>
                </Pressable>
              );
            },
          }}
        />
        <Tabs.Screen
          name="(app)/myevent"
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
          listeners={() => ({
            tabPress: (event) => onPressTab(event),
          })}
        />
        <Tabs.Screen
          name="(app)/me"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => {
              return setTabBarButton(focused);
            },
            headerShown: false,
          }}
          listeners={() => ({
            tabPress: (event) => onPressTab(event),
          })}
        />
      </Tabs>

      <QrScan isOpen={showQr} onClose={handleCloseQr} />

      <SigninSlideUp
        isPreSigninVisible={isPreSigninVisible}
        toggleModal={toggleModal}
      />
    </>
  );
};
