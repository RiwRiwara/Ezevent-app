// explore/index.tsx
import React from "react";
import ScrollableList from "@components/exploreComponent/ScrollableList";
import EventScrollableList from "@components/exploreComponent/EventScrollableList";
import EventCardScroller from "@components/exploreComponent/EventCardScroller";
import TitleBar from "@components/common/TitleBar";
import { Search } from "lucide-react-native";
import { useSession } from "../../../providers/ctx";

import {GetAllEvents} from "@services/api/event/ApiEvent";

import {
  useStyled,
  VStack,
  HStack,
  View,
  ScrollView,
  Text,
  Button,
} from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { useHandleSignOutByApi } from "@services/auth/SignOut";

const Explore = () => {
  const styled = useStyled();
  const handleSignOut = useHandleSignOutByApi();



  return (
    <View bg="$gray0">
      {/* Header */}
      <VStack reversed={false}>
        <HStack>
          <Text onPress={handleSignOut}>Sign Out</Text>
        </HStack>

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
      </VStack>

      {/* Body */}
      <ScrollView>
        <TitleBar title="New Events" button={true} />

        <EventScrollableList />
        <TitleBar title="Other events" />
        <EventCardScroller />

        <View bg="$gray0" minHeight={200}></View>
      </ScrollView>
      
    </View>
  );
};

export default Explore;
