import React, { useState, useEffect } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import EventCard from "./EventCard";

import { GetAllEvents } from "@services/api/event/ApiEvent";

const EventCardScroller = ({
  items = [
    { title: "Event 1", img: "https://via.placeholder.com/150" },
    { title: "Event 2", img: "https://via.placeholder.com/150" },
    { title: "Event 3", img: "https://via.placeholder.com/150" },
    { title: "Event 4", img: "https://via.placeholder.com/150" },
    { title: "Event 5", img: "https://via.placeholder.com/150" },
  ],
}) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching all events...");
    GetAllEvents()
      .then((data) => {
        console.log("Finished fetching all events");
        console.log("All events:", data.events);
        setEvents(data.events);
      })
      .catch((error) => {
        console.error("Error fetching all events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      {/* {items.map((item, index) => {
        return <EventCard key={index} title={item.title} img={item.img} />;
      })} */}

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          {events.map((event, index) => {
            return (
              <EventCard
                key={index}
                event={event}
              />
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

export default EventCardScroller;
