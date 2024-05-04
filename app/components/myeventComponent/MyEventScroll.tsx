import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
import {
  ScrollView,
  Box,
  Text,
  Image,
  View,
  VStack,
} from "@gluestack-ui/themed";
import MyEventCard from "./MyEventCard";
import { useLocalSearchParams } from "expo-router";
import { GetStatusMyEvents } from "@services/api/event/myevent/ApiMyEvent";

export default function MyEventScroll(props) {
  const {
    type,
    progress,
    status,
    titleBtn = "Cancel",
    colorBtn = "$danger5",
    whiteBtn = "Cancel",
    button = false,
  } = props;
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [eventData, setEventData] = useState([]);
  const [eventsFound, setEventsFound] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("[MyEventScroll] : Fetching all events...");
    GetStatusMyEvents(type, progress, status, session)
      .then((data) => {
        console.log("[MyEventScroll] : Finished fetching all events");
        setEventData(data.events);
        setEventsFound(data.events.length > 0);
        console.log(data.events)
      })
      .catch((error) => {
        console.error(
          "[MyEventScroll] : Error fetching all events:",
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
        // Render loading indicator
        <VStack alignItems="center">
          <View>
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
        </VStack>
      ) : (
        <>
          {eventsFound ? (
            eventData.map((event, index) => (
              <MyEventCard
                key={index}
                titleBtn={titleBtn}
                colorBtn={colorBtn}
                myevent={event}
                whiteBtn={whiteBtn}
                button={button}
              />
            ))
          ) : (
            <VStack justifyContent="space-between" alignItems="center">
              <Text
                fontSize="$title_5"
                fontWeight="$bold"
                color="$danger9"
                p="$1"
              >
                No events
              </Text>
            </VStack>
          )}
        </>
      )}
    </ScrollView>
  );
}
