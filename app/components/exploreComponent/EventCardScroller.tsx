import React, { useState } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, Dimensions } from "react-native";
import EventCard from "./EventCard";

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
      {items.map((item, index) => {
        return <EventCard 
          key={index} 
          title={item.title}
          img={item.img}
        />;
      })}
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
