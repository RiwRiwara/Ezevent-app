// Code: app/(tabs)/_layout.js
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Text, View } from "@gluestack-ui/themed";
import { useToken } from "@gluestack-ui/themed";
import { useStyled } from "@gluestack-ui/themed"
import {
  CalendarCheck,
  Inbox,
  FolderClosed,
  UserRound,
  QrCode,
} from "lucide-react-native";

export default () => {
  const styled = useStyled()

  const tabBackground =  styled.config.tokens.colors.neutral6
  const gray0 = styled.config.tokens.colors.gray0;
  const neutral6 = styled.config.tokens.colors.neutral6;
  const gray9 = styled.config.tokens.colors.gray9;

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
                  color={gray0}
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
                  color={gray0}
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
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: gray0,
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 70 : 80,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 40,
                  borderColor: neutral6,
                  borderWidth: 3,
                  shadowColor: gray9,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              >
                <QrCode size={50} strokeWidth={2} color={neutral6} />
              </View>
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
                  color={gray0}
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
                  color={gray0}
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
