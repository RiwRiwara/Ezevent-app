// explore/index.tsx
import React from "react";
import { VStack, HStack, View, Text } from "@gluestack-ui/themed";
import ScrollableList from "../../components/exploreComponent/ScrollableList";
import { StyleSheet } from "react-native";

const Explore = () => {
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
    <VStack space="md" reversed={false}>
     <HStack style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
        <Text style={styles.headerText}>Explore</Text>
      </HStack>


      <View p="$0">
        <VStack space="md" reversed={false}>
          <ScrollableList items={items} />
        </VStack>
      </View>

      <View p="$2">
        <VStack space="md" reversed={false}></VStack>
      </View>
    </VStack>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

});
export default Explore;
