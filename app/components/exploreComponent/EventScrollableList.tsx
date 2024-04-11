import React, { useState, useEffect } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, ActivityIndicator, Pressable } from "react-native";
import { Redirect, Link } from "expo-router";
import { GetLastestEvent } from "@services/api/event/ApiEvent";

const EventScrollableList = ({
  imgWidth = 250,
  imgHeight = 375,
  refreshing,
}) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);
  const [latestEvents, setLatestEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("[EventScrollableList] : Fetching latest events...");
    GetLastestEvent()
      .then((data) => {
        console.log("EventScrollableList] : Finished fetching latest events");
        setLatestEvents(data.events);
      })
      .catch((error) => {
        console.error(
          "EventScrollableList] : Error fetching latest events:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshing]);

  return (
    <ScrollView
      p={10}
      horizontal={true}
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onContentSizeChange={(contentWidth, _) =>
        setScrollContentWidth(contentWidth)
      }
      style={[
        styles.scrollView,
        scrollContentWidth > 0 && styles.overflowBackground,
      ]}
    >
      {loading ? (
        <>
          {[...Array(2)].map((_, index) => (
            <View key={index}>
              <Image
                w={imgWidth}
                h={imgHeight}
                alt="Loading..."
                my={0}
                borderRadius={10}
                mr={15}
                source={{
                  uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b95233eb5ffk4f46u9soryvb0lwvdtee43ke6oe6mkol&ep=v1_gifs_search&rid=200w.gif&ct=g",
                }}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          {latestEvents.map((event, index) => {
            return (
              <Link key={index} href={`/event/${event.event_id}`} push>
                <View>
                  <Image
                    w={imgWidth}
                    h={imgHeight}
                    alt={event.event_name}
                    my={10}
                    borderRadius={10}
                    mr={15}
                    source={{
                      uri: `${event.getBannerImage}?timestamp=${Date.now()}`,
                    }}
                  />
                </View>
              </Link>
            );
          })}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "transparent",
  },
  overflowBackground: {},
});

export default EventScrollableList;
