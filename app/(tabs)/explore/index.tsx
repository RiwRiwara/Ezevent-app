// explore/index.tsx
import React from "react";
import ScrollableList from "../../components/exploreComponent/ScrollableList";
import EventScrollableList from "../../components/exploreComponent/EventScrollableList";
import TitleBar from "../../components/common/TitleBar";

import { Search } from "lucide-react-native";

import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
} from "@gluestack-ui/themed";

const Explore = () => {
  const styled = useStyled();

  return (
    <VStack reversed={false}>
      <HStack
        justifyContent="space-between"
        p={10}
        h={50}
        backgroundColor="$neutral6"
        alignItems="center"
      >
        <Text fontSize="$title_4" fontWeight="$bold" color="$gray0">
          Explore
        </Text>
        <Search
          size={30}
          strokeWidth={2}
          color={styled.config.tokens.colors.gray0}
        />
      </HStack>

      <ScrollableList />

      <TitleBar title="New Events" button={true} />
      <EventScrollableList />

      <TitleBar title="Other events" />
      <EventScrollableList imgWidth={150} imgHeight={200} />

      <View p="$2">
        <VStack space="md" reversed={false}></VStack>
      </View>
    </VStack>
  );
};

export default Explore;
