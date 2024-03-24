import React, { useState } from "react";
import { ScrollView, Box, Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View, Dimensions } from "react-native";

const EventScrollableList = ({
  imgWidth = 250,
  imgHeight = 375,
}) => {
  const [scrollContentWidth, setScrollContentWidth] = useState(0);
  const itemWidth = 200; // Width of each item
  const screenWidth = Dimensions.get('window').width; // Width of screen

  const items = [
    { alt: "All" },
    { alt: "Education" },
    { alt: "Entertainment" },
    { alt: "Entertainmentsd" },
  ];

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}
      onContentSizeChange={(contentWidth, _) =>
        setScrollContentWidth(contentWidth)
      }
      style={[
        styles.scrollView,
        scrollContentWidth > 0 && styles.overflowBackground,
      ]}
    >
      {items.map((item, index) => {

        return (
          <View key={index} >
            <Image
              w={imgWidth}
              h={imgHeight}
            
              alt={item.alt}
              my={10}
              borderRadius={10}
              mr={15}
              source="https://p-u.popcdn.net/event_details/posters/000/016/995/large/e6ff105e47e89a7df7eb3cce3aa8bcd1f79869ae.png?1709262054"
            />
          </View>
        )
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "transparent",
  },
  overflowBackground: {
  },
});

export default EventScrollableList;
