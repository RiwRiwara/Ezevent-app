import React, { useState, useEffect } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { GetLastestEvent } from "@services/api/event/ApiEvent";

const EventScrollableList = ({ imgWidth = 250, imgHeight = 375 }) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);
  const [latestEvents, setLatestEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching latest events...");
    GetLastestEvent()
      .then((data) => {
        console.log("Finished fetching latest events");
        console.log("Latest events:", data.events);
        setLatestEvents(data.events);
      })
      .catch((error) => {
        console.error("Error fetching latest events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const items = [
    { alt: "All" },
    { alt: "Education" },
    { alt: "Entertainment" },
    { alt: "Entertainmentsd" },
  ];

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
          {[...Array(5)].map((_, index) => (
            <View key={index}>
              <Image
                w={imgWidth}
                h={imgHeight}
                alt="Loading..."
                my={10}
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
              <View key={index}>
                <Image
                  w={imgWidth}
                  h={imgHeight}
                  alt={event.event_name}
                  my={10}
                  borderRadius={10}
                  mr={15}
                  source={{ uri: event.getBannerImage }}
                />
              </View>
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
