import React, {useEffect, useState} from "react";
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
  View
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import MyEventCard from "@components/myeventComponent/MyEventCard";

import MyEventScroll from "@components/myeventComponent/MyEventScroll";

const Reviewing = () => {
  const styled = useStyled();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState("All");
  const [reload, setReload] = useState(false);

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setReload(!reload);
  };

  useEffect(() => {
  }, [reload]);

  return (
    <View bg="$gray0">
      <MyEventBar title="List of event waiting for review" />

      <HStack justifyContent="flex-start" px={15} py={5}>
        <Pressable onPress={() => handleSelectValue("All")}>
          <Box bg="$gray2" borderRadius={5} alignItems="center" mx={10} >
            <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9" p="$0.5" px="$8">
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
        <Box bg="$primary0" borderRadius={5} alignItems="center" mx={10} px="$5">
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
      
      <MyEventScroll
        key={reload}
        type={selectedValue}
        progress="IsReviewed"
        status="Normal"
        titleBtn="Review" 
        colorBtn="$primary4"
      />


    </View>
  );
};

export default Reviewing;
