import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { useSession } from "@providers/ctx";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RadarChart from "react-svg-radar-chart";
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

const me = () => {
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
          <Text fontSize="$title_4" fontWeight="$bold" color="$neutral8">
            My Profile
          </Text>
          <Settings
            size={30}
            strokeWidth={2}
            color={styled.config.tokens.colors.neutral8}
          />
        </HStack>
        <HStack>
          <Button w="$full">
            <Text fontSize="$sm" color="$gray0">
              Go to organizing portal
            </Text>
          </Button>
        </HStack>

        {/* Body */}
        <VStack>
          <HStack justifyContent="space-between">
            <VStack alignItems="center" bg="$gray0" w="$2/4" p="$3">
              <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
                <AvatarFallbackText>Robert Fox</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: IMAGE_URLS.userprofile + "/" + user?.profile_img || DEFAULT_IMAGES.userprofile,
                  }}
                />
              </Avatar>
              <Text fontSize="$sm" fontWeight="$bold" color="$neutral8">
                {user?.first_name || "Robert Fox"} {user?.last_name || "Fox"}
              </Text>
              <Text fontSize="$xs" color="$neutral8">
                {user?.email || "robert@mail.com"}
              </Text>
            </VStack>

            <VStack bg="$primary0" w="$2/4" p="$3" alignItems="center">
              <Text color="$neutral8"> INTP</Text>
            </VStack>

          </HStack>
          <Box bg="$gray0" w="$full" alignItems="center" pt={10}>
            <Text color="$primary8">Hello my name is  {user?.first_name || "Robert Fox"} {user?.last_name || "Fox"}</Text>
          </Box>
        </VStack>

        <Box bg="$gray0" w="$full" alignItems="center" p="$3">
          <Text fontSize="$sm" color="$gray9">
          {user?.short_bio || "Hello My name is Robert i study in thailand and i love cat , My hobbies is playing game and let adventure in real world i can’t do anything that it will improve the world"}
          </Text>
        </Box>
        <VStack alignItems="center">
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
        <Box bg="$gray0" w="$full" alignItems="center" p="$3">
          <Text fontSize="$sm" fontWeight="$bold" color="$neutral9">
            Badges
          </Text>
        </Box>
        <HStack justifyContent="space-between" p="$2">
          <HStack>
            <CalendarCheck2
              size={40}
              color={styled.config.tokens.colors.neutral8}
            />
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
              Events
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
              5
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" p="$2">
          <HStack>
            <Building2 size={40} color={styled.config.tokens.colors.neutral8} />
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
              Organizations
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
              5
            </Text>
          </HStack>
        </HStack>
        <Box bg="$gray0" w="$full" alignItems="center" p="$3">
          <Text fontSize="$sm" fontWeight="$bold" color="$neutral9">
            Spider Chart
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default me;
