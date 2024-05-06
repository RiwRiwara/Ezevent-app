import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";
import { Redirect, Link, useLocalSearchParams } from "expo-router";
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
} from "@gluestack-ui/themed";
import { retrieveToken } from "@utils/RetrieveToken";
import axios from "axios";
import { API_ENDPOINTS, getApiUrl, WEB_URL } from "@constants/api/endpoints";
import { Linking, RefreshControl } from "react-native";

const Me = () => {
  const styled = useStyled();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const timestamp = new Date().getTime();

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  };

  useEffect(() => {
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
          response.data.user.profile_img = response.data.user.profile_img + "?" + timestamp;
          setUser(response.data.user);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [refreshing]);

  return (
    <View>
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
        <Link href={"/(app)/me/Setting"} asChild>
          <Settings
            size={30}
            strokeWidth={2}
            color={styled.config.tokens.colors.neutral8}
          />
        </Link>
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
      <ScrollView
        bg="$gray0"
        h="100%"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#000"
          />
        }
      >
        <VStack reversed={false}>
          <VStack>
            <HStack justifyContent="space-between">
              <VStack alignItems="center" bg="$gray0" w="$2/4" p="$3">
                <Avatar
                  bgColor="$amber600"
                  size="xl"
                  borderRadius="$full"
                  mb={5}
                >
                  {loading ? (
                    <Spinner size="small" />
                  ) : (
                    <>
                      <AvatarFallbackText>loading . . .</AvatarFallbackText>
                      {user?.profile_img === null ? (
                        <AvatarImage
                          source={{
                            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                          }}
                          alt="Profile Image"
                        />
                      ) : (
                        <AvatarImage
                          source={{
                            uri:
                              IMAGE_URLS.userprofile +
                                "/" +
                                user?.profile_img 
                          }}
                          alt="Profile Image"
                        />
                      )}
                    </>
                  )}
                </Avatar>


                <Text fontSize="$sm" fontWeight="$bold" color="$neutral8">
                  {user?.first_name || "loading . . ."}{" "}
                  {user?.last_name || "..."}
                </Text>

                <Text fontSize="$xs" color="$neutral8">
                  {user?.email || "robert@mail.com"}
                </Text>
              </VStack>

              <VStack bg="$primary0" w="$2/4" p="$3" alignItems="center">
                <Text color="$neutral8">{user?.personality || "INTP"}</Text>
              </VStack>
            </HStack>
          </VStack>

          <Box bg="$gray0" w="$full" alignItems="center" p="$3">
            <Text fontSize="$sm" color="$gray9">
              {user?.short_bio || "add a short bio here . . ."}
            </Text>
          </Box>
          <VStack alignItems="center">
            <HStack space="2xl" p="$3">
              <Box w="$20" h="$20" bg="$gray1" alignItems="center">
                <Text color="$primary8">IMAGE1</Text>
              </Box>
              <Box w="$20" h="$20" bg="$gray1" alignItems="center">
                <Text color="$primary8">IMAGE2</Text>
              </Box>
              <Box w="$20" h="$20" bg="$gray1" alignItems="center">
                <Text color="$primary8">IMAGE3</Text>
              </Box>
            </HStack>
          </VStack>
          <Box bg="$gray0" w="$full" alignItems="center" p="$3">
            <Text fontSize="$sm" fontWeight="$bold" color="$neutral9">
              Badges
            </Text>
          </Box>
          <HStack justifyContent="space-between" p="$2">
            <HStack>
              <CalendarCheck2
                size={40}
                color={styled.config.tokens.colors.neutral8}
              />
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                Events
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
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
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                Organizations
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                5
              </Text>
            </HStack>
          </HStack>
          <Box bg="$gray0" w="$full" alignItems="center" p="$3">
            <Text fontSize="$sm" fontWeight="$bold" color="$neutral9">
              Spider Chart
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default Me;
