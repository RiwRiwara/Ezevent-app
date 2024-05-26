import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
import {
  ScrollView,
  Box,
  Text,
  Image,
  View,
  VStack,
  Button,
  HStack,
  Badge,
  BadgeText,
  Spinner,
} from "@gluestack-ui/themed";
import MyEventCard from "./MyEventCard";
import { useLocalSearchParams } from "expo-router";
import { RefreshControl, Platform, StyleSheet } from "react-native";

import { GetAppMyEvents } from "@services/api/event/myevent/ApiMyEvent";
import ButtonSet from "../common/StatusButtonSet";
import { API_ENDPOINTS, getApiUrl } from "@constants/api/endpoints";
import { Link } from "expo-router";
import axios from "axios";
import { retrieveToken } from "@utils/RetrieveToken";
import { useTranslation } from "react-i18next";

export default function ApplicationScroll(page) {
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [appData, setappData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [componentRefreshing, setComponentRefreshing] = useState(false);

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setComponentRefreshing(!componentRefreshing);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  };
  useEffect(() => {
    setLoading(true);

    const getMyApplication = async () => {
      const token = await retrieveToken();
      const apiUrl = getApiUrl(API_ENDPOINTS.MY_APPLICATION);
      console.log(apiUrl);
      axios
        .get(getApiUrl(API_ENDPOINTS.MY_APPLICATION), {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setappData(res.data.applications);
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    };

    getMyApplication();
  }, [setComponentRefreshing]);

  return (
    <ScrollView
      h={260}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#000"
        />
      }
    >
      {loading ? (
        // Render loading indicator
        <>
        <Spinner />
        </>
      ) : (
        <>
          {appData ? (
            <>
              {appData.map((appmyevent, index) => {
                return (
                  <View key={index} w="$full" alignItems="center">
                    <Link href={`/event/${appmyevent.event.event_id}`} push>
                      <HStack w={380}  h={150} justifyContent="space-between" px={10}>
                        <HStack alignItems="center" px={5}>
                          <Image
                            h="$32"
                            w="$24"
                            alt="IMG"
                            // m="$10"
                            borderRadius={10}
                            borderWidth="$2"
                            borderColor="$gray7"
                            source={{
                              uri:
                                appmyevent.event.getBannerImage ||
                                "https://via.placeholder.com/150",
                            }}
                          />
                        </HStack>

                        <VStack py={10} gap={5}>
                          <Text fontWeight="bold">
                            {appmyevent.event.event_name.substring(0, 30)}
                          </Text>
                          <Text>
                            Apply Date : {appmyevent.application_date}
                          </Text>

                          <View>
                            <Text>Type : {appmyevent.type}</Text>
                          </View>
                          <View>
                            <Text>Status : {appmyevent.status}</Text>
                          </View>
                        </VStack>
                      </HStack>
                    </Link>
                  </View>
                );
              })}
            </>
          ) : (
            <>
              <View h={50} alignItems="center">
                <Text>No Application Found</Text>
              </View>
            </>
          )}
        </>
      )}
      <View h={200}></View>
    </ScrollView>
  );
}
