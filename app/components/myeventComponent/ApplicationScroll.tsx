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
} from "@gluestack-ui/themed";
import MyEventCard from "./MyEventCard";
import { useLocalSearchParams } from "expo-router";
import { GetAppMyEvents } from "@services/api/event/myevent/ApiMyEvent";
import ButtonSet from "../common/ButtonSet";
import { Link } from "expo-router";

export default function ApplicationScroll(page) {
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [appData, setappData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    GetAppMyEvents(session, page)
      .then((data) => {
        setappData(data.applications.data);
        console.log(data.applications.data);
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
  }, [session, page]);

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  return (
    <ScrollView h={260}>
      {loading ? (
        // Render loading indicator
        <>
          {[...Array(1)].map((_, index) => (
            <View key={index} alignItems="center">
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
          {appData.map((appmyevent, index) => {
            return (
              <View w="$full" alignItems="center">
                <Link href={`/event/${appmyevent.event.event_id}`} push>
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
                              appmyevent.event.banner_image ??
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
                            {appmyevent.event.date_start}
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
                              {appmyevent.event.venue}
                            </Text>
                          </Box>
                        </HStack>
                        <Text
                          fontSize="$paragraph"
                          fontWeight="$bold"
                          color="$neutral9"
                        >
                          {appmyevent.event.event_name.length > 5
                            ? `${appmyevent.event.event_name.substring(0, 25)}`
                            : appmyevent.event.event_name}
                        </Text>

                        <HStack justifyContent="flex-end">
                          <ButtonSet
                            title="Cancel"
                            color="$primary4"
                          ></ButtonSet>
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
