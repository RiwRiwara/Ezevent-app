// app/components/explore/ScrollableList.tsx

import React, { useState } from "react";
import { ScrollView, Box, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const ScrollableList = ({ items }) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ flexDirection: "row" }}
      onContentSizeChange={(contentWidth, _) =>
        setScrollContentWidth(contentWidth)
      }
      style={[
        styles.scrollView,
        scrollContentWidth > 0 && styles.overflowBackground,
      ]}
    >
      {/* Mapping through items and rendering Box components */}
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
