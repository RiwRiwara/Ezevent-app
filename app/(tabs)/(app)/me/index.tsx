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
} from "@gluestack-ui/themed";
import { retrieveToken } from "@utils/RetrieveToken";
import axios from "axios";
import { API_ENDPOINTS, getApiUrl, WEB_URL } from "@constants/api/endpoints";
import { Linking, RefreshControl, Platform, StyleSheet } from "react-native";

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
          response.data.user.profile_img =
            response.data.user.profile_img + "?" + timestamp;
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
        <VStack >
          <HStack justifyContent="center" style={styles.borderbt}>
            <VStack alignItems="center" bg="$gray0" w="$2/4" p="$3">
              {loading ? (
                <Avatar
                  bgColor="$amber600"
                  size="2xl"
                  borderRadius="$full"
                  mb={5}
                >
                  <AvatarImage
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                    }}
                    alt="Profile Image"
                  />
                </Avatar>
              ) : (
                <Avatar
                  bgColor="$amber600"
                  size="2xl"
                  borderRadius="$full"
                  mb={5}
                >
                  <AvatarImage
                    source={{
                      uri: IMAGE_URLS.userprofile + "/" + user?.profile_img,
                    }}
                    alt="Profile Image"
                  />
                </Avatar>
              )}

              <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
                {user?.first_name || "loading . . ."} {user?.last_name || "..."}
              </Text>

              <Text fontSize="$sm" color="$neutral8">
                {user?.email || "robert@mail.com"}
              </Text>
            </VStack>
          </HStack>

          <Box bg="$gray0" w="$full" alignItems="center" p="$3">
            <Text fontSize="$sm" color="$gray9">
              {user?.short_bio || "add a short bio here . . ."}
            </Text>
          </Box>
          <VStack alignItems="center">
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

          <Box bg="$gray0" w="$full" alignItems="center" p="$3" style={styles.borderbt}>
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
              Badges
            </Text>
          </Box>
          <Box bg="$gray0" w="$full" alignItems="center" p="$3" style={styles.borderbt}>
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9">
              History
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

        </VStack>
      </ScrollView>
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
