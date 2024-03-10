import { Tabs } from "expo-router";
import { Image } from 'expo-image';
import icons from "../../config/icons";
import { COLORS } from "../../config/color";
import {  View, Text, Platform } from "react-native";


export default () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 70,
        elevation: 0,
        backgroundColor: COLORS.neutral6
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
              }}>
                <Image
                  source={focused ? icons.Explore : icons.Explore}
                  contentFit="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.black : COLORS.white
                  }}
                />

                <Text style={{
                  fontSize: 12,
                  color: focused ? COLORS.black : COLORS.white
                }}>Explore</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
              }}>
                <Image
                  source={focused ? icons.Inbox : icons.InboxOutline }
                  contentFit="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.black : COLORS.white
                  }}
                />

                <Text style={{
                  fontSize: 12,
                  color: focused ? COLORS.black : COLORS.white
                }}>Inbox</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.white,
                width: Platform.OS == "ios" ? 70 : 80,
                height: Platform.OS == "ios" ? 70 : 80,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 40,
                borderColor: COLORS.neutral6,
                borderWidth: 3,
                shadowColor: COLORS.black,  
                shadowOffset: { width: 0, height: 2 }, 
                shadowOpacity: 0.5, 
                shadowRadius: 3,
                elevation: 5,   
              }}>
                <Image
                  source={icons.qr}
                  contentFit="contain"
                  style={{
                    height: 45,
                    width: 45,
                    tintColor: COLORS.neutral6
                  }}
                />
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="myevent"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
              }}>
                <Image
                  source={focused ? icons.MyeventOutline : icons.MyeventOutline}
                  contentFit="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.black : COLORS.white
                  }}
                />

                <Text style={{
                  fontSize: 12,
                  color: focused ? COLORS.black : COLORS.white
                }}>Myevent</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
              }}>
                <Image
                  source={focused ? icons.Profile : icons.ProfileOutline}
                  contentFit="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.black : COLORS.white
                  }}
                />

                <Text style={{
                  fontSize: 12,
                  color: focused ? COLORS.black : COLORS.white
                }}>Me</Text>
              </View>
            )
          }
        }}
      />
    </Tabs>
  );
};
