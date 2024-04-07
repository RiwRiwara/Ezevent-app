import React from "react";
import "@i18n/i18n.config";
import { useTranslation } from "react-i18next";
import { useStyled } from "@gluestack-ui/themed";
import Participant_summary_type from "@components/participant_summary_type";
import Organizer_summary_type from "@components/organizer_summary_type";
import { Text, HStack, VStack, Box, Image } from "@gluestack-ui/themed";
import {
  CalendarCheck,
  Menu,
  CheckCircle2,
  ClipboardList,
  BellPlus,
  Clock3,
} from "lucide-react-native";
import { Link } from "expo-router";
import ButtonSet from "@components/common/ButtonSet";

const myevent = () => {
  const { t } = useTranslation();
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;

  return (
    <VStack bg="$gray0">
      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        bg="$gray0"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Text fontSize="$title_4" fontWeight="$bold" color="$neutral9">
            My Events
          </Text>
          <CalendarCheck size={36} strokeWidth={2} color={neutral9} />
        </HStack>

        <Text color="$neutral9">View Saved</Text>
      </HStack>
      <VStack
        justifyContent="space-between"
        py={30}
        alignItems="center"
        space="4xl"
      >
        <HStack space="4xl">
          <Link href={""}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <BellPlus size={84} strokeWidth={1} color={neutral9} />
              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                UpComing
              </Text>
            </Box>
          </Link>
          <Link href={""}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <Clock3 size={84} strokeWidth={1} color={neutral9} />
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
          <Link href={""}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <ClipboardList size={84} strokeWidth={1} color={neutral9} />
              <Text
                fontSize="$title_5"
                fontWeight="$semibold"
                color="$neutral9"
              >
                Reviewing
              </Text>
            </Box>
          </Link>
          <Link href={""}>
            <Box
              w={120}
              h={120}
              bg="$gray0"
              borderRadius="$lg"
              alignItems="center"
              borderWidth="$2"
              borderColor="$neutral9"
            >
              <CheckCircle2 size={84} strokeWidth={1} color={neutral9} />

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

      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        bg="$gray0"
        alignItems="center"
      >
        <Text fontSize="$title_4" fontWeight="$bold" color="$neutral9">
          Recent Requesting
        </Text>
        <Menu size={36} strokeWidth={1} color={neutral9} />
      </HStack>

      <VStack>
        <HStack>
          <HStack w="$1/3">
            <Image
              w="$full"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
            />
          </HStack>
          <HStack w="$2/3">
            <VStack>
              <HStack alignItems="center">
                <Text>Date and Time</Text>
                <Text>Status</Text>
              </HStack>
              <Text>Title Event</Text>
              {/* <Text fontSize="$title_6">description</Text> */}
              <ButtonSet title="Add" color="$gray5" />
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default myevent;
