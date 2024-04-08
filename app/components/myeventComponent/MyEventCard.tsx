// app/components/explore/ScrollableList.tsx

import React from "react";
import { View } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import {
  useStyled,
  Text,
  HStack,
  VStack,
  Box,
  Image,
  Center,
  ScrollView,
} from "@gluestack-ui/themed";
import ButtonSet from "../common/ButtonSet";
import ButtonWhiteSet from "../common/ButtonWhiteSet";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";

const MyEventCard = ({ whiteBtn = "Cancle", titleBtn, colorBtn, button = false }) => {
  const styled = useStyled();

  return (
    <VStack alignItems="center" bg="$gray09">
      <HStack w="$full" h={150} paddingRight={5}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          w="$1/3"
          px={5}
        >
          <VStack alignItems="center" w="$full" py={10} px={10}>
            <Image
              h="$32"
              w="$full"
              // m="$10"
              borderRadius={10}
              borderWidth="$2"
              borderColor="$gray7"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
            />
          </VStack>
        </HStack>
        <HStack w="$2/3" py={10}>
          <VStack justifyContent="space-between" w="$full" px={5}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="$small_3" color="$danger6">
                Sun, 21 Jan 2023
              </Text>
              <Box bg="$primary0" borderRadius={5} alignItems="center" px={2}>
                <Text fontSize="$small_3" fontWeight="$bold" color="">
                  Waiting for response
                </Text>
              </Box>
            </HStack>
            <Text fontSize="$paragraph" fontWeight="$bold" color="$neutral9">
              IGCSE MOCK EXAM
            </Text>
            <Text fontSize="$small_2" color="$gray08">
              สถาบัน MedCoach จัด IGCSE Mock Exam ฟรี
              เลือกวิชาที่ใช่เพื่อปูทางเตรียมเข้าคณะแพทย์
            </Text>
            <HStack justifyContent="flex-end">
              {button && (
                <ButtonWhiteSet title={whiteBtn}></ButtonWhiteSet>
              )}

              <ButtonSet title={titleBtn} color={colorBtn}></ButtonSet>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default MyEventCard;
