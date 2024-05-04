import React, { useState, useEffect } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import EventCard from "./EventCard";
import { Link } from "expo-router";

import { GetAllEvents } from "@services/api/event/ApiEvent";

const EventCardScroller = ({
  items = [
    { title: "Event 1", img: "https://via.placeholder.com/150" },
    { title: "Event 2", img: "https://via.placeholder.com/150" },
    { title: "Event 3", img: "https://via.placeholder.com/150" },
    { title: "Event 4", img: "https://via.placeholder.com/150" },
    { title: "Event 5", img: "https://via.placeholder.com/150" },
  ],
  refreshing,
}) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetAllEvents()
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => {
        console.error(
          "[EventCardScroller] : Error fetching all events:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshing]);

  return (
    <ScrollView
      py={5}
      px={10}
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
          {events.map((event, index) => {
            return <EventCard key={index} event={event} />;
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

export default EventCardScroller;
