import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
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

import { Link } from "expo-router";

export default function MyEventSaveScroll() {
  const [loading, setLoading] = useState(false);
  const { session } = useSession();
  const [eventSaveData, seteventSaveData] = useState([]);
  const [eventsFound, setEventsFound] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetSavedMyEvents(session)
      .then((data) => {
        seteventSaveData(data.events);
      })
      .catch((error) => {
        console.log(
          "[MyEventSaveScroll] : Error fetching all events:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [session]);

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
          {eventSaveData.map((saveevent, index) => {
            return (
              <View w="$full" alignItems="center">
                <Link href={`/event/${saveevent.event.event_id}`} push>
                  <HStack w="$full" h={150}>
                    <HStack
                      justifyContent="space-between"
                      alignItems="center"
                      w="$1/3"
                      px={5}
                    >
                      <VStack alignItems="center" w="$full">
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
                              saveevent.event.banner_image ??
                              "https://via.placeholder.com/150",
                          }}
                        />
                      </VStack>
                    </HStack>
                    <HStack w="$2/3" py={10}>
                      <VStack justifyContent="space-between" w="$full" px={5}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text fontSize="$small_3" color="$danger6">
                            {saveevent.event.date_start}
                          </Text>

                          <Box
                            bg="$primary0"
                            borderRadius={5}
                            alignItems="center"
                            px={2}
                          >
                            <Text
                              fontSize="$small_3"
                              fontWeight="$bold"
                              color="$neutral9"
                            >
                              {saveevent.event.venue}
                            </Text>
                          </Box>
                        </HStack>
                        <Text
                          fontSize="$paragraph"
                          fontWeight="$bold"
                          color="$neutral9"
                        >
                          {saveevent.event.event_name.length > 20
                            ? `${saveevent.event.event_name.substring(0, 25)}`
                            : saveevent.event.event_name}
                        </Text>

                        <HStack justifyContent="flex-end">
                          <ButtonSet title="View" color="$primary4"></ButtonSet>
                        </HStack>
                      </VStack>
                    </HStack>
                  </HStack>
                </Link>
              </View>
            );
          })}
        </>
      )}
    </ScrollView>
  );
}
