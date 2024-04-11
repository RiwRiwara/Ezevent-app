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
} from "@gluestack-ui/themed";
import { MapPin } from "lucide-react-native";
import { Redirect, Link, useLocalSearchParams, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GetEventDetail } from "@services/api/event/ApiEvent";
import { StyleSheet, ActivityIndicator, Pressable, Platform } from "react-native";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import TitleBarBack from "@components/common/TitleBarBack";


const EventDetail = () => {
  const params = useLocalSearchParams();
  const [eventDetail, setEventDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const contentW = useWindowDimensions().width;
  const [source, setSource] = useState({ html: "" });

  const event_id = params.event_id.toString();

  useEffect(() => {
    setLoading(true);
    console.log("[EventDetail] : Fetching event detail... " + event_id);
    GetEventDetail(event_id)
      .then((data) => {
        console.log("[EventDetail] : Finished fetching event detail");
        setSource({ html: data.event.content });
        setEventDetail(data.event);
      })
      .catch((error) => {
        console.error("[EventDetail] : Error fetching event detail:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View>
      
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#" />
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

              <View px={6} py={8}>
                <RenderHtml source={source} contentWidth={contentW} />
              </View>
            </>
          )
        )}
      </ScrollView>

      {loading ? (
        <></>
      ) : (
        <View
          style={{ position: "absolute", bottom: 0, width: "100%" }}
          h={Platform.OS !== "web" ? Platform.OS === "ios" ? 50 : 60 : 70}
          backgroundColor="$neutral6"
          py={10}
          px={10}
        >
          <HStack gap={10} alignItems="center">
            <Button backgroundColor="$gray0" w={Platform.OS !== "web" ? Platform.OS === "ios" ? 325 : 280 : 300}>
              <Text fontSize="$lg" fontWeight="$bold">
                Join Now!
              </Text>
            </Button>

            <Text fontSize="$lg" fontWeight="$bold" color="#fff">
              {eventDetail.limit_participant} / {eventDetail.limit_participant}
            </Text>
          </HStack>
        </View>
      )}
    </View>
  );
};

export default EventDetail;
