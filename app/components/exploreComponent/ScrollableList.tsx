// app/components/explore/ScrollableList.tsx

import React, { useState } from "react";
import { ScrollView, Box, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const ScrollableList = () => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);

  const items = [
    { label: "All" },
    { label: "Education" },
    { label: "Entertainment" },
    { label: "Charity" },
    { label: "Seminar" },
    { label: "Funny" },
    { label: "Technology" },
  ];

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ flexDirection: "row" }}
      indicatorStyle = "white"
      onContentSizeChange={(contentWidth, _) =>
        setScrollContentWidth(contentWidth)
      }
      style={[
        styles.scrollView,
        scrollContentWidth > 0 && styles.overflowBackground,
      ]}
    >
      {items.map((item, index) => (
        <Box key={index} p={10} bg="$primary0">
          <Text color="$neutral9">{item.label}</Text>
        </Box>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "transparent",
    borderTopWidth: 4,
    borderTopColor: "#F2BF73",
  },
  overflowBackground: {
    backgroundColor: "#FFF3E7",
  },
});

export default ScrollableList;
