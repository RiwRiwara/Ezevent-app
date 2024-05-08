import React, { useState, useEffect } from "react";
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
  Pressable,
  View,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import UpcomeScroll from "@components/myeventComponent/UpcomeScroll";

const InProgres = () => {
  const styled = useStyled();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState("All");
  const [reload, setReload] = useState(false);

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setReload(!reload);
  };


  const handleAction = (action) => {
    console.log(action)
    if (action === "CheckOut") {
      // Automatically proceed to "Review"
      return "Review";
    }
    return action;
  };

  return (
    <View bg="$gray0">
      <MyEventBar title="List of In-progress Event" />
      <HStack justifyContent="flex-start" px={15} py={5}>
        <Pressable onPress={() => handleSelectValue("All")}>
          <Box bg="$gray2" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize="$small_3"
              fontWeight="$bold"
              color="$neutral9"
              p="$0.5"
              px="$8"
            >
              All
            </Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleSelectValue("Participant")}>
          <Box bg="$primary0" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize="$small_3"
              fontWeight="$bold"
              color="$neutral9"
              mx={10}
              p="$0.5"
            >
              Participants
            </Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleSelectValue("Staff")}>
          <Box
            bg="$primary0"
            borderRadius={5}
            alignItems="center"
            mx={10}
            px="$5"
          >
            <Text
              fontSize="$small_3"
              fontWeight="$bold"
              color="$neutral9"
              mx={10}
              p="$0.5"
            >
              Staff
            </Text>
          </Box>
        </Pressable>
      </HStack>

      <UpcomeScroll
        key={reload}
        type={selectedValue}
        progress="IsCheckIn"
        status="Normal"
        titleBtn="Check Out"
        colorBtn="$danger5"
        statusCheck="Cancelled"
        action={handleAction}
      />
    </View>
  );
};

export default InProgres;
