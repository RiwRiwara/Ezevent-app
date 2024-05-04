import React, { useState } from "react";
import "@i18n/i18n.config";
import { useTranslation } from "react-i18next";
import { useStyled } from "@gluestack-ui/themed";
import Participant_summary_type from "@components/participant_summary_type";
import Organizer_summary_type from "@components/organizer_summary_type";
import { Dimensions, useWindowDimensions } from "react-native";
import {
  Text,
  HStack,
  VStack,
  Box,
  View,
  Image,
  ScrollView,
  Button,
  Pressable
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
  console.log(currentPage)
  return (
    <VStack bg="$gray0">
      {/* <View bg="$gray0" minHeight={200}></View> */}
      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        bg="$gray0"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral9">
            My Events
          </Text>
          <CalendarCheck size={30} strokeWidth={2} color={neutral9} />
        </HStack>
        <Link href={"/(app)/myevent/Saved"}>
          <Text color="$neutral9">View Saved</Text>
        </Link>
      </HStack>
      <VStack
        justifyContent="space-between"
        py={30}
        alignItems="center"
        space="4xl"
      >
        <HStack space="4xl">
          <Link href={"/(app)/myevent/UpComing"}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <BellPlus size={80} strokeWidth={1} color={neutral9} />
              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                UpComing
              </Text>
            </Box>
          </Link>
          <Link href={"/(app)/myevent/InProgress"}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <Clock3 size={80} strokeWidth={1} color={neutral9} />
              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                In progress
              </Text>
            </Box>
          </Link>
        </HStack>
        <HStack space="4xl">
          <Link href={"/(app)/myevent/Reviewing"}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <ClipboardList size={80} strokeWidth={1} color={neutral9} />
              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                Reviewing
              </Text>
            </Box>
          </Link>
          <Link href={"/(app)/myevent/Complete"}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <CheckCircle2 size={80} strokeWidth={1} color={neutral9} />

              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                Completed
              </Text>
            </Box>
          </Link>
        </HStack>
      </VStack>

      <MyEventBar title="Recent Requesting" />
      <HStack justifyContent="space-between" mx="$1" mb="$2">
        <Pressable onPress={handlePrevPage}>
          <Box bg="$neutral3" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize="$small_3"
              fontWeight="$bold"
              color="$neutral9"
              p="$0.5"
              px="$8"
            >
              Previous
            </Text>
          </Box>
        </Pressable>
        <Pressable onPress={handleNextPage}>
          <Box bg="$neutral3" borderRadius={5} alignItems="center" mx={10}>
            <Text
              fontSize="$small_3"
              fontWeight="$bold"
              color="$neutral9"
              p="$0.5"
              px="$8"
            >
              Next
            </Text>
          </Box>
        </Pressable>
      </HStack>
      <ApplicationScroll page={currentPage}/>
    </VStack>
  );
};

export default MyEvent;
