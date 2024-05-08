import React, { useState } from "react";
import "@i18n/i18n.config";
import { useTranslation } from "react-i18next";
import { useStyled } from "@gluestack-ui/themed";
import Participant_summary_type from "@components/participant_summary_type";
import Organizer_summary_type from "@components/organizer_summary_type";
import { Dimensions, useWindowDimensions, Platform } from "react-native";
import {
  Text,
  HStack,
  VStack,
  Box,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Center,
} from "@gluestack-ui/themed";
import {
  CalendarCheck,
  Menu,
  CheckCircle2,
  ClipboardList,
  BellPlus,
  Clock3,
} from "lucide-react-native";
import { Link } from "expo-router";

import MyEventCard from "@components/myeventComponent/MyEventCard";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import ApplicationScroll from "@components/myeventComponent/ApplicationScroll";

const MyEvent = () => {
  const { t } = useTranslation();
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <VStack bg="$gray0" h="100%">
      {/* Header */}
      <HStack
        justifyContent="space-between"
        p={10}
        h={Platform.OS === "ios" ? 50 : 65}
        pt={Platform.OS === "ios" ? 0 : 25}
        top={Platform.OS === "ios" ? 0 : 0}
        backgroundColor="$neutral6"
        alignItems="center"
      >
        <HStack alignItems="center" gap={10}>
          <Text fontSize={16} fontWeight="$bold" color="$gray0">
            My Events
          </Text>
          <CalendarCheck size={30} strokeWidth={2} color="#fff" />
        </HStack>

        <Link href={"/(app)/myevent/Saved"}>
          <Text color="$gray0" fontSize={16} fontWeight="$bold">
            View Saved
          </Text>
        </Link>
      </HStack>

      <MyEventBar title="Track progress" />

      <HStack justifyContent="space-evenly" py={30} gap={10}>
        <Link href={"/(app)/myevent/UpComing"}>
          <Center
            w={90}
            h={90}
            bg="$gray0"
            borderRadius="$lg"
            alignItems="center"
            borderWidth="$2"
            borderColor="$neutral9"
          >
            <BellPlus size={30} strokeWidth={1.5} color={neutral9} />
            <Text fontSize={16} fontWeight="$semibold" color="$neutral9">
              UpComing
            </Text>
          </Center>
        </Link>
        <Link href={"/(app)/myevent/InProgress"}>
          <Center
            w={90}
            h={90}
            bg="$gray0"
            borderRadius="$lg"
            alignItems="center"
            borderWidth="$2"
            borderColor="$neutral9"
          >
            <Clock3 size={30} strokeWidth={1.5} color={neutral9} />
            <Text fontSize={16} fontWeight="$semibold" color="$neutral9">
              In progress
            </Text>
          </Center>
        </Link>
        <Link href={"/(app)/myevent/Reviewing"}>
          <Center
            w={90}
            h={90}
            bg="$gray0"
            borderRadius="$lg"
            alignItems="center"
            borderWidth="$2"
            borderColor="$neutral9"
          >
            <ClipboardList size={30} strokeWidth={1.5} color={neutral9} />
            <Text fontSize={16} fontWeight="$semibold" color="$neutral9">
              Reviewing
            </Text>
          </Center>
        </Link>
        <Link href={"/(app)/myevent/Complete"}>
          <Center
            w={90}
            h={90}
            bg="$gray0"
            borderRadius="$lg"
            alignItems="center"
            borderWidth="$2"
            borderColor="$neutral9"
          >
            <CheckCircle2 size={30} strokeWidth={1.5} color={neutral9} />

            <Text fontSize={16} fontWeight="$semibold" color="$neutral9">
              Completed
            </Text>
          </Center>
        </Link>
      </HStack>

      <MyEventBar title="Recent Requesting" />

      <HStack
        justifyContent="space-between"
        borderBottomColor="$gray1"
        borderBottomWidth={1}
        pb={10}
      >
        <Pressable onPress={handlePrevPage}>
          <Box bg="$neutral2" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize={16}
              fontWeight="$bold"
              color="$neutral9"
              p={4}
              px={10}
            >
              Previous
            </Text>
          </Box>
        </Pressable>
        <Pressable onPress={handleNextPage}>
          <Box bg="$neutral2" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize={16}
              fontWeight="$bold"
              color="$neutral9"
              p={4}
              px={10}
            >
              Next
            </Text>
          </Box>
        </Pressable>
      </HStack>

      <ApplicationScroll page={currentPage} />
    </VStack>
  );
};

export default MyEvent;
