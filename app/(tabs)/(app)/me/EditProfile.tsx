import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { useSession } from "@providers/ctx";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";

import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  ScrollView,
  Box,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

const EditProfile = () => {
  const styled = useStyled();
  const { user } = useSession();
  const captions = {
    learnings: "Learning Skill",
    problemsolving: "Problem-Solving Skill",
    communication: "Communication Skill",
    professional: "Professional Skill",
    knowledge: "Knowledge",
    Leadership: "Leadership",
    thinking: "Thinking",
    teamwork: "Teamwork Skill",
  };
  const data = [
    {
      data: {
        learnings: 0.8,
        problemsolving: 0.5,
        communication: 0.4,
        professional: 0.5,
        knowledge: 0.4,
        Leadership: 0.5,
        thinking: 0.5,
        teamwork: 0.9,
      },
      meta: { color: "#58FCEC" },
    },
  ];

  return (
    <ScrollView>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Profile Image
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
            <AvatarFallbackText>AP</AvatarFallbackText>
            <AvatarImage
              source={{
                uri:
                  IMAGE_URLS.userprofile + "/" + user?.profile_img ||
                  DEFAULT_IMAGES.userprofile,
              }}
            />
          </Avatar>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Full Name
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$primary8">
            {user?.first_name || "Robert Fox"} {user?.last_name || "Fox"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Email
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$primary8">
            {user?.email || "robert@mail.com"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Personality
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            INTP
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Short Bio
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            Hello my name is {user?.first_name || "Robert Fox"}{" "}
            {user?.last_name || "Fox"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Description
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            {user?.short_bio ||
              "Hello My name is Robert i study in thailand and i love cat , My hobbies is playing game and let adventure in real world i can’t do anything that it will improve the world"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Other Images
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <HStack space="2xl" p="$3">
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE1</Text>
            </Box>
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE2</Text>
            </Box>
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE3</Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Social Media
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            Social Media
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Address
          </Text>
          <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
            Edit
          </Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            {user?.address || "Address"}
          </Text>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default EditProfile;
