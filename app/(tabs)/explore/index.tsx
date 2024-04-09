// explore/index.tsx
import React from "react";
import ScrollableList from "@components/exploreComponent/ScrollableList";
import EventScrollableList from "@components/exploreComponent/EventScrollableList";
import EventCardScroller from "@components/exploreComponent/EventCardScroller";
import SearchFilter from "@components/exploreComponent/SearchFilter";
import Calendars from "@components/exploreComponent/Calendars";
import TitleBar from "@components/common/TitleBar";
import { Search } from "lucide-react-native";
import { useSession } from "@providers/ctx";

import { GetAllEvents } from "@services/api/event/ApiEvent";

import {
  useStyled,
  VStack,
  HStack,
  View,
  ScrollView,
  Text,
  Button,
  ButtonText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  KeyboardAvoidingView,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputSlot,
  InputIcon,
  InputField,
  Box,
} from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { CalendarCheck } from "lucide-react-native";
import { useHandleSignOutByApi } from "@services/auth/SignOut";

const Explore = () => {
  const styled = useStyled();
  const handleSignOut = useHandleSignOutByApi();
  const [showSearchFilter, setShowSearchFilter] = React.useState(false);
  const handleCloseSearchFilter = () => setShowSearchFilter(!showSearchFilter);
  const [showCalendars, setShowCalendars] = React.useState(false);
  const handleCloseCalendars = () => setShowCalendars(!showCalendars);

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
          <Button px={9} onPress={handleCloseSearchFilter} backgroundColor="$neutral6">
            <Search
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.gray0}
            />
          </Button>
          <SearchFilter isOpen={showSearchFilter} onClose={handleCloseSearchFilter} />
        </HStack>
        <ScrollableList />
      </VStack>

      {/* Body */}
      <ScrollView>
        <HStack
          justifyContent="space-between"
          px={15}
          py={10}
          height={48}
          bg="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_4" fontWeight="$bold" color="$neutral9">
            New Events
          </Text>
          <Button px={0} onPress={handleCloseCalendars} backgroundColor="$gray0">
            <CalendarCheck
              size={36}
              strokeWidth={2}
              color={styled.config.tokens.colors.neutral9}
            />
          </Button>
          <Calendars isOpen={showCalendars} onClose={handleCloseCalendars} />
        </HStack>
        <EventScrollableList />
        <TitleBar title="Other events" />
        <EventCardScroller />

        <View bg="$gray0" minHeight={200}></View>
      </ScrollView>
    </View>
  );
};

export default Explore;
