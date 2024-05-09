import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { Settings, Pencil } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";
import { Redirect, Link, useLocalSearchParams, router } from "expo-router";
import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  ScrollView,
  Box,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  Spinner,
  Image,
  ButtonText,
} from "@gluestack-ui/themed";
import { retrieveToken } from "@utils/RetrieveToken";
import axios from "axios";
import { API_ENDPOINTS, getApiUrl, WEB_URL } from "@constants/api/endpoints";
import Badge from "@components/badge";

import { Linking, RefreshControl, Platform, StyleSheet } from "react-native";

const Me = () => {
  const styled = useStyled();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const timestamp = new Date().getTime();
  const [badges, setBadges] = useState([]);

  const params = useLocalSearchParams();

  const id = params.id?.toString();

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const fetchData = async () => {
      try {
        const token = await retrieveToken();
        const response = await axios.get(getApiUrl(API_ENDPOINTS.GET_PROFILE), {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
          },
        });
        if (isMounted) {
          response.data.user.profile_img = response.data.user.profile_img;
          setUser(response.data.user);
        }
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const fetchBadgeData = async () => {
      try {
        const token = await retrieveToken();
        const response = await axios.get(
          getApiUrl(API_ENDPOINTS.GET_MY_BADGES),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "ngrok-skip-browser-warning": "true",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBadges(response.data.myBadges);
      } catch (error) {
        console.log("Error fetching badges:", error);
      }
    };

    fetchData();
    fetchBadgeData();
    return () => {
      isMounted = false;
    };
  }, [refreshing]);

  return (
    <View mt={Platform.OS !== "web" ? (Platform.OS === "ios" ? 0 : 20) : 0}>
      <HStack
        justifyContent="space-between"
        p={10}
        h={50}
        backgroundColor="$gray0"
        alignItems="center"
      >
        <Text fontSize="$title_4" fontWeight="$bold" color="$neutral8">
          My Profile
        </Text>

        <View alignItems="center" flexDirection="row" gap={10}>
          <Link href={"/(app)/me/EditProfile"} asChild>
            <Pencil
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.neutral8}
            />
          </Link>
          <Link href={"/(app)/me/Setting"} asChild>
            <Settings
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.neutral8}
            />
          </Link>
        </View>
      </HStack>
      <Button
        w="$full"
        borderRadius={0}
        onPress={() => Linking.openURL(WEB_URL.replace("api", ""))}
      >
        <Text fontSize="$sm" color="$gray0">
          Go to organizing portal
        </Text>
      </Button>
      <View>
        <ScrollView
          bg="$gray0"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#000"
            />
          }
        >
          <VStack>
            <HStack justifyContent="center" style={styles.borderbt}>
              <VStack alignItems="center" bg="$gray0" w="$2/4" p="$3">
                <Avatar
                  bgColor="$amber600"
                  size="2xl"
                  borderRadius="$full"
                  mb={5}
                >
                  {loading ? (
                    <AvatarImage
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                      }}
                      alt="mock Image"
                    />
                  ) : (
                    <AvatarImage
                      source={{
                        uri:
                          IMAGE_URLS.userprofile +
                          "/" +
                          user?.profile_img +
                          "?timestamp=" +
                          timestamp,
                      }}
                      alt={user?.profile_img || "mock Image2"}
                    />
                  )}
                </Avatar>

                <VStack gap={6} alignItems="center" mt={4} w={300}>
                  <Text
                    fontSize={24}
                    w="full"
                    fontWeight="$bold"
                    color="$neutral8"
                  >
                    {user?.first_name || "-"} {user?.last_name || "-"}
                  </Text>

                  <HStack gap={20}>
                    <Button
                      color="$neutral8"
                      onPress={() => Linking.openURL(`mailto:${user?.email}`)}
                      variant="outline"
                      action="positive"
                    >
                      <ButtonText fontSize={16}>
                        {user?.email || "-"}
                      </ButtonText>
                    </Button>

                    <Button
                      color="$neutral8"
                      onPress={() =>
                        Linking.openURL(`tel:${user?.mobile_number}`)
                      }
                      variant="outline"
                      action="positive"
                    >
                      <ButtonText fontSize={16}>
                        {user?.mobile_number || "-"}
                      </ButtonText>
                    </Button>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>

            <View
              bg="$neutral0"
              w="$full"
              alignItems="center"
              p="$3"
              style={{}}
            >
              <Text fontSize="$md" color="$gray9">
                {user?.short_bio || "-"}
              </Text>
            </View>
            <VStack alignItems="center" bg="$neutral0">
              <HStack space="2xl" p="$3">
                <Image
                  size="lg"
                  borderRadius={10}
                  source={{
                    uri: DEFAULT_IMAGES.userprofile,
                  }}
                  alt="Image1"
                />
                <Image
                  size="lg"
                  borderRadius={10}
                  source={{
                    uri: DEFAULT_IMAGES.userprofile,
                  }}
                  alt="Image2"
                />
                <Image
                  size="lg"
                  borderRadius={10}
                  source={{
                    uri: DEFAULT_IMAGES.userprofile,
                  }}
                  alt="Image3"
                />
              </HStack>
            </VStack>

            <Box
              bg="$gray0"
              w="$full"
              alignItems="center"
              p="$3"
              style={styles.borderbt}
            >
              <View
                bg="$gray0"
                w="$full"
                alignItems="center"
                p="$3"
                style={styles.borderbt}
              >
                <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
                  Badges
                </Text>
              </View>
              {badges ? (
                <>
                  <ScrollView
                    bg="$neutral0"
                    horizontal={true}
                    contentContainerStyle={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <HStack gap={25} py={10}>
                      {badges.map((badge, index) => (
                        <Link
                          key={index}
                          href={{
                            pathname: `/(app)/me/BadgeDetail?id=${badge.id}`,
                            params: { name: badge.name_en },
                          }}
                          push
                        >
                          <VStack alignItems="center" gap={5}>
                            <Image
                              w={60}
                              h={60}
                              key={index}
                              borderRadius={10}
                              source={{
                                uri: badge.url,
                              }}
                              alt={badge.name_en}
                            />
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              color="$neutral7"
                            >
                              {badge.count}
                            </Text>
                          </VStack>
                        </Link>
                      ))}
                    </HStack>
                  </ScrollView>
                </>
              ) : (
                <>
                  <Text>...</Text>
                </>
              )}
            </Box>

            <View justifyContent="start">
              <View
                bg="$gray0"
                w="$full"
                alignItems="center"
                p="$3"
                style={styles.borderbt}
              >
                <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
                  Personality
                </Text>
              </View>
              <HStack justifyContent="center" p="$2" bg="$neutral0">
                <HStack>
                  <Text fontSize="$md" color="$neutral9" p="$3">
                    {user?.personality || "-"}
                  </Text>
                </HStack>
              </HStack>
            </View>

            <View justifyContent="start">
              <View
                bg="$gray0"
                w="$full"
                alignItems="center"
                p="$3"
                style={styles.borderbt}
              >
                <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
                  Address
                </Text>
              </View>
              <HStack justifyContent="center" p="$2" bg="$neutral0">
                <HStack>
                  <Text fontSize="$md" color="$neutral9" p="$3">
                    {user?.address || "-"}
                  </Text>
                </HStack>
              </HStack>
            </View>

            {/* <View justifyContent="start"
            >
              <View
                bg="$gray0"
                w="$full"
                alignItems="center"
                p="$3"
                style={styles.borderbt}
              >
                <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
                  History
                </Text>
              </View>
              <HStack justifyContent="space-between" p="$2">
                <HStack>
                  <CalendarCheck2
                    size={40}
                    color={styled.config.tokens.colors.neutral8}
                  />
                  <Text
                    fontSize="$md"
                    fontWeight="$bold"
                    color="$neutral9"
                    p="$3"
                  >
                    Events
                  </Text>
                </HStack>
                <HStack>
                  <Text
                    fontSize="$md"
                    fontWeight="$bold"
                    color="$neutral9"
                    p="$3"
                  >
                    5
                  </Text>
                </HStack>
              </HStack>
              <HStack justifyContent="space-between" p="$2">
                <HStack>
                  <Building2
                    size={40}
                    color={styled.config.tokens.colors.neutral8}
                  />
                  <Text
                    fontSize="$md"
                    fontWeight="$bold"
                    color="$neutral9"
                    p="$3"
                  >
                    Organizations
                  </Text>
                </HStack>
                <HStack>
                  <Text
                    fontSize="$md"
                    fontWeight="$bold"
                    color="$neutral9"
                    p="$3"
                  >
                    5
                  </Text>
                </HStack>
              </HStack> 
            </View>*/}
            <View h={300}></View>
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderbt: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});

export default Me;
