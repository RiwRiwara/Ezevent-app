import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import ScrollableList from "@components/exploreComponent/ScrollableList";
import { Redirect } from "expo-router";
import { useSession } from "@providers/ctx";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  Box,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

const me = () => {
  const styled = useStyled();
  const { session } = useSession();
  const [showActionsheet, setShowActionsheet] = useState(false);

  return (
    <View bg="$gray0">
      {/* Header */}
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
        {/* Body */}
        <HStack>
          <Button w="$full">
            <Text fontSize="$sm" color="$gray0">
              Go to organizing portal
            </Text>
          </Button>
        </HStack>
        <VStack>
          <HStack justifyContent="space-between">
            <VStack alignItems="center" bg="$gray0" w="$1/3" p="$3">
              <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
                <AvatarFallbackText>Robert Fox</AvatarFallbackText>
              </Avatar>
              <Text fontSize="$sm" fontWeight="$bold" color="$neutral8">
                Robert Fox
              </Text>
              <Text fontSize="$xs" color="$neutral8">
                Robert262845@mail.com
              </Text>
            </VStack>
            <VStack bg="$primary0" w="$2/3" p="$3" alignItems="center">
              <Text color="$neutral8">MBTI</Text>
            </VStack>
          </HStack>
          <Box bg="$gray0" w="$full" alignItems="center">
            <Text color="$primary8">Hello my name is Robert Fox</Text>
          </Box>
        </VStack>
        <Box bg="$gray0" w="$full" alignItems="center" p="$3">
          <Text fontSize="$sm" color="$gray9">
            Hello My name is Robert i study in thailand and i love cat , My
            hobbies is playing game and let adventure in real world i can’t do
            anything that it will improve the world
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
        <ScrollableList />
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
        <Box bg="$gray1" w="$full" alignItems="center" p="$3">
          <Text fontSize="$sm" fontWeight="$bold" color="$neutral9">
            Spider Chart
          </Text>
        </Box>
        <VStack alignItems="center">
          <HStack p="$3" alignItems="center">
            <VStack alignItems="center">
              <FaFacebook
                size={40}
                color={styled.config.tokens.colors.neutral8}
              />
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                Facebook
              </Text>
            </VStack>
            <VStack alignItems="center">
              <FaInstagram
                size={40}
                color={styled.config.tokens.colors.neutral8}
              />
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                Instagram
              </Text>
            </VStack>
            <VStack alignItems="center">
              <FaXTwitter
                size={40}
                color={styled.config.tokens.colors.neutral8}
              />
              <Text fontSize="$md" fontWeight="$bold" color="$neutral9" p="$3">
                Twitter
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default me;
