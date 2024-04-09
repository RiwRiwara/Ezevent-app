import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import {
  useStyled,
  ScrollView,
  HStack,
  Switch,
  VStack,
  Text,
  Box,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import MyEventCard from "@components/myeventComponent/MyEventCard";
const InProgres = () => {
  const styled = useStyled();
  const { t } = useTranslation();

  return (
    <VStack bg="$gray0">
      <MyEventBar title="List of In-progress Event" />

      <HStack justifyContent="flex-start" px={15} py={5} >
        <Box bg="$gray2" borderRadius={5} alignItems="center" mx={10} p="$0.5">
          <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9">
          Waiting Check In
          </Text>
        </Box>
        <Box bg="$primary0" borderRadius={5} alignItems="center" >
          <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9" mx={10} p="$0.5">
          In event
          </Text>
        </Box>
      </HStack>

      <ScrollView bg="$gray0">
        <MyEventCard titleBtn="Check In" colorBtn="$primary4" button/>
        <MyEventCard titleBtn="Check In" colorBtn="$primary4" button/>
        <MyEventCard whiteBtn="Exit" titleBtn="Check Out" colorBtn="$gray3" button/>
      </ScrollView>
    </VStack>
  );
};

export default InProgres;
