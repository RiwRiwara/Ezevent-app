import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  ScrollView,
  Box,
  Image,
  ImageBackground,
  AvatarFallbackText,
  ButtonText,
} from "@gluestack-ui/themed";
import { MapPin } from "lucide-react-native";
import { Redirect, Link, useLocalSearchParams, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GetEventDetail } from "@services/api/event/ApiEvent";
import {
  ActivityIndicator,
  Platform,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { ChevronLeft, Bell, Ellipsis } from "lucide-react-native";
import ApplicationAction from "@components/eventDetail/ApplicationAction";
import MenuAction from "@components/eventDetail/MenuAction";
import NotiAction from "@components/eventDetail/NotiAction";
import AuthAction from "@components/auth/AuthAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EventDetail = () => {
  const params = useLocalSearchParams();
  const [eventDetail, setEventDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const contentW = useWindowDimensions().width;
  const [source, setSource] = useState({ html: "" });
  const event_id = params.event_id.toString();
  const [localToken, setLocalToken] = useState(null);

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

  useEffect(() => {
    setLoading(true);

    GetEventDetail(event_id)
      .then((data) => {
        setSource({ html: data.event.content });
        setEventDetail(data.event);
      })
      .catch((error) => {
        console.error("[EventDetail] : Error fetching event detail:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [localToken]);

  return (
    <View>
      <View
        backgroundColor="$neutral6"
        style={styles.borderBot}
        pt={Platform.OS !== "web" ? (Platform.OS == "ios" ? 0 : 20) : 0}
      >
        <HStack
          px={6}
          py={3}
          gap={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/explore">
            <ChevronLeft
              size={35}
              absoluteStrokeWidth
              strokeWidth={3}
              color="#ffffff"
            />
          </Link>

          <View
            flexDirection="row"
            gap={10}
            alignItems="center"
            justifyContent="center"
          >
            <NotiAction />
            <MenuAction />
          </View>
        </HStack>
      </View>

      <ScrollView>
        {loading ? (
          <View h="full" justifyContent="center">
            <ActivityIndicator size="large" color="#" />
          </View>
        ) : (
          eventDetail && (
            <>
              <View h={800} w="$full">
                <ImageBackground
                  source={{ uri: eventDetail.getBannerImage }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{ position: "absolute", bottom: 0, width: "100%" }}
                    h={200}
                    backgroundColor={eventDetail.banner_text_bg}
                    py={10}
                    px={10}
                  >
                    <Text
                      color={eventDetail.banner_text_color}
                      fontSize="$md"
                      fontWeight="$semibold"
                    >
                      {eventDetail.getCategoriesForShow}
                    </Text>

                    <Text
                      color={eventDetail.banner_text_color}
                      fontSize="$4xl"
                      fontWeight="$bold"
                      my={8}
                    >
                      {eventDetail.event_name}
                    </Text>

                    <Text color={eventDetail.banner_text_color} fontSize="$md">
                      {eventDetail.getDateShow}
                    </Text>

                    <Text color={eventDetail.banner_text_color} fontSize="$md">
                      {eventDetail.getTimeShow}
                    </Text>

                    <HStack mt={8} gap={4} alignItems="center">
                      <MapPin color={eventDetail.banner_text_color} />
                      <Text
                        color={eventDetail.banner_text_color}
                        fontSize="$md"
                      >
                        {eventDetail.placename}
                      </Text>
                    </HStack>
                  </View>
                </ImageBackground>
              </View>

              <View px={6} py={8} mb={20} backgroundColor="$gray0">
                <RenderHtml source={source} contentWidth={contentW} />
              </View>

              <Box h={100}>

              </Box>
            </>
          )
        )}
      </ScrollView>

      {loading ? (
        <></>
      ) : (
        <View
          style={{
            position: "absolute",
            bottom:
              Platform.OS !== "web" ? (Platform.OS === "ios" ? 50 : 70) : 70,
            width: "100%",
          }}
          h={Platform.OS !== "web" ? (Platform.OS === "ios" ? 50 : 60) : 70}
          backgroundColor="$neutral6"
          py={10}
          px={10}
        >
          {localToken? (
            <ApplicationAction event={eventDetail} />
          ) : (
            <AuthAction />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borderBot: {
    borderBottomWidth: 4,
    borderBottomColor: "#F27F0C",
  },
});

export default EventDetail;
