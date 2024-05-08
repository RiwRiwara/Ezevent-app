// app/components/explore/ScrollableList.tsx

import React, { useState } from "react";
import { ScrollView, Box, Text, LinkText, View } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
const ScrollableList = () => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);

  const items = [
    { label: "All", value: "all" },
    { label: "Education", value: "education" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Charity", value: "charity" },
    { label: "Seminar", value: "seminar" },
    { label: "Funny", value: "funny" },
    { label: "Technology", value: "technology" },
  ];

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ flexDirection: "row" }}
      indicatorStyle="white"
      onContentSizeChange={(contentWidth, _) =>
        setScrollContentWidth(contentWidth)
      }
      style={[
        styles.scrollView,
        scrollContentWidth > 0 && styles.overflowBackground,
      ]}
      pt={4}
    >
      {items.map((item, index) => (
        <Link key={index} href={ "/dev"}>
          <View p={10} bg="$primary0">
            <Text
              size="sm"
              fontFamily="$heading"
              fontWeight="$semibold"
              color="$neutral9"
              $dark-color="$primary300"
              textDecorationLine="none"
            >
              {item.label}
            </Text>
          </View>
        </Link>
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
