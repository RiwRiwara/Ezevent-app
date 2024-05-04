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
import { GetAppMyEvents } from "@services/api/event/myevent/ApiMyEvent";

export default function ApplicationScroll() {

  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [appData, setappData] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetAppMyEvents(session)
      .then((data) => {
        setappData(data.events);
      })
      .catch((error) => {
        console.error(
          "[ApplicationScroll] : Error fetching all events:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [session]);

  return (
    <></>
    // <ScrollView>
    //   {loading ? (
    //     // Render loading indicator
    //     <VStack alignItems="center">
    //       <View>
    //         <Image
    //           w={200}
    //           h={90}
    //           alt="Loading..."
    //           mr={10}
    //           source={{
    //             uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b95233eb5ffk4f46u9soryvb0lwvdtee43ke6oe6mkol&ep=v1_gifs_search&rid=200w.gif&ct=g",
    //           }}
    //         />
    //       </View>
    //     </VStack>
    //   ) : (
    //     <>
    //       {eventsFound ? (
    //         appData.map((event, index) => (
    //           <MyEventCard
    //             key={index}
    //             titleBtn="Cancel"
    //             colorBtn="$danger5"
    //             myevent={event}
    //             whiteBtn=""
    //             button={false}
    //           />
    //         ))
    //       ) : (
    //         <VStack justifyContent="space-between" alignItems="center">
    //           <Text
    //             fontSize="$title_5"
    //             fontWeight="$bold"
    //             color="$danger9"
    //             p="$1"
    //           >
    //             No events
    //           </Text>
    //         </VStack>
    //       )}
    //     </>
    //   )}
    // </ScrollView>
  );
}
