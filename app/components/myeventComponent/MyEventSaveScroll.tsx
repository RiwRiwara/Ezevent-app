import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
import {IMAGE_URLS} from "@constants/azure/azureimageurl";
import {
  ScrollView,
  Box,
  Text,
  Image,
  View,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import MyEventCard from "./MyEventCard";
import { useLocalSearchParams } from "expo-router";
import { GetSavedMyEvents } from "@services/api/event/myevent/ApiMyEvent";
import ButtonSet from "../common/StatusButtonSet";
import { retrieveToken } from "@utils/RetrieveToken";
import axios from "axios";
import { Link } from "expo-router";
import { API_ENDPOINTS, getApiUrl } from "@constants/api/endpoints";

export default function MyEventSaveScroll() {
  const [loading, setLoading] = useState(false);
  const { session } = useSession();
  const [eventSaveData, seteventSaveData] = useState([]);
  const [eventsFound, setEventsFound] = useState(false);

  useEffect(() => {
    setLoading(true);

    const GetSavedMyEvents = async () => {
      setEventsFound(false);
      const token = await retrieveToken();
      const url = getApiUrl(API_ENDPOINTS.GET_SAVED_MYEVENT);
      await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          seteventSaveData(res.data.events);
          setLoading(true);
          setEventsFound(true);
          
        })
        .catch((error) => {
          console.log(
            "[MyEventSaveScroll] : Error fetching all events:",
            error
          );
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    GetSavedMyEvents();
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <>
          {[...Array(1)].map((_, index) => (
            <View key={index}>
              <Image
                w={200}
                h={90}
                alt="Loading..."
                mr={10}
                source={{
                  uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b95233eb5ffk4f46u9soryvb0lwvdtee43ke6oe6mkol&ep=v1_gifs_search&rid=200w.gif&ct=g",
                }}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          {eventsFound ? (
            <>
              {eventSaveData.map((saveevent, index) => {
                return (
                  <View key={index} w="$full" alignItems="center">
                    <Link href={`/event/${saveevent.event.event_id}`} push>
                      <HStack w={380}  h={150} justifyContent="space-between" px={10}>
                        <HStack alignItems="center" px={5}>
                          <Image
                            h="$32"
                            w="$24"
                            alt={`${saveevent.event.event_id}-image`}
                            borderRadius={10}
                            borderWidth="$2"
                            borderColor="$gray7"
                            source={{
                              uri:
                              `${IMAGE_URLS.eventimgs}/${saveevent.event.banner_image}` ||
                                "https://via.placeholder.com/150",
                            }}
                          />
                        </HStack>
         

                        <VStack py={10} gap={5}>
                          <Text fontWeight="bold">
                            {saveevent.event.event_name.substring(0, 30)}
                          </Text>
                          <Text>
                           {saveevent.placename}
                          </Text>

                          <View>
                            <Text> {saveevent.date_start}</Text>
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
              <Text h={50} mt={10} px={15}>
                No Saved Event Found
              </Text>
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}
