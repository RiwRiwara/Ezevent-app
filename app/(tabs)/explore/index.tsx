// explore/index.tsx
import React from "react";
import ScrollableList from "@components/exploreComponent/ScrollableList";
import EventScrollableList from "@components/exploreComponent/EventScrollableList";
import EventCardScroller from "@components/exploreComponent/EventCardScroller";
import SearchFilter from "@components/exploreComponent/SearchFilter";
import TitleBar from "@components/common/TitleBar";
import { Search } from "lucide-react-native";
import { useSession } from "@providers/ctx";
import { RefreshControl } from "react-native";

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
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const [refreshing, setRefreshing] = useState(false);
  const [componentRefreshing, setComponentRefreshing] = useState(false);

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setComponentRefreshing(!componentRefreshing);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  };


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
          <Button onPress={handleClose} backgroundColor="$neutral6">
            <Search
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.gray0}
            />
          </Button>
          <SearchFilter isOpen={showActionsheet} onClose={handleClose} />
        </HStack>
        <ScrollableList />
      </VStack>

      {/* Body */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#000"
          />
        }
      >
        <TitleBar title="New Events" button={true} />

        <EventScrollableList refreshing={componentRefreshing} />

        <TitleBar title="Other events" />
        <EventCardScroller refreshing={componentRefreshing} />

        <View bg="$gray0" minHeight={200}></View>
      </ScrollView>
    </View>
  );
};

export default Explore;
