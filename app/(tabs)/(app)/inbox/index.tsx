import { Redirect, Stack, Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
import {
  FlatList,
  View,
  Button,
  ButtonText,
  Heading,
  HStack,
  Spinner,
  VStack,
  Text,
  Center,
  AlertIcon,
  CheckCircleIcon,
  useStyled,
  Image,
} from "@gluestack-ui/themed";
import { Ellipsis } from "lucide-react-native";
import { GetMyInbox } from "@services/api/inbox/ApiGetMyInbox";
import TitleBar from "@components/common/TitleBar";
import { RefreshControl, Platform } from "react-native";

const Inbox = () => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [InboxData, setInboxData] = useState([]);
  const [filteredInboxData, setFilteredInboxData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    let filteredData = [];

    if (category === "Unread") {
      filteredData = InboxData.filter((item) => item.status === "Unread");
    } else {
      filteredData = InboxData.filter((item) => item.inbox_type === category);
    }

    setFilteredInboxData(filteredData);
  };

  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    // Add leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  useEffect(() => {
    setLoading(true);
    GetMyInbox(session)
      .then((data) => {
        setInboxData(data.data);
      })
      .catch((error) => {
        console.error("[Inbox] : Error fetching all inboxs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [session]);

  const [refreshing, setRefreshing] = useState(false);
  const [componentRefreshing, setComponentRefreshing] = useState(false);

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setComponentRefreshing(!componentRefreshing);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  };

  return (
    <View>
      <View>

        {/* Header */}
        <VStack reversed={false}>
          <HStack
            justifyContent="start"
            p={10}
            h={Platform.OS === "ios" ? 50 : 65}
            pt={Platform.OS === "ios" ? 0 : 25}
            top={Platform.OS === "ios" ? 0 : 0}
            backgroundColor="$neutral6"
            alignItems="center"
          >
            <Text fontSize="$title_4" fontWeight="$bold" color="$gray0">
              Inbox
            </Text>

          </HStack>
        </VStack>

        <HStack
          justifyContent="space-between"
          py={10}
          px={5}
          backgroundColor="$gray0"
        >
          <HStack flexDirection="row" gap={10}>
            <Button
              bg={activeCategory === "Unread" ? "$neutral9" : "$neutral1"}
              borderRadius={5}
              justifyContent="center"
              px={20}
              py={4}
              onPress={() => handleCategoryClick("Unread")}
            >
              <ButtonText
                fontSize={16}
                fontWeight="$bold"
                color={activeCategory === "Unread" ? "$white" : "$neutral9"}
              >
                All
              </ButtonText>
            </Button>
            <Button
              bg={activeCategory === "Staff" ? "$neutral9" : "$neutral1"}
              borderRadius={5}
              justifyContent="center"
              px={20}
              py={4}
              onPress={() => handleCategoryClick("Staff")}
            >
              <ButtonText
                fontSize={16}
                fontWeight="$bold"
                color={activeCategory === "Staff" ? "$white" : "$neutral9"}
              >
                For Staff
              </ButtonText>
            </Button>
            <Button
              bg={activeCategory === "Participant" ? "$neutral9" : "$neutral1"}
              borderRadius={5}
              justifyContent="center"
              px={20}
              py={4}
              onPress={() => handleCategoryClick("Participant")}
            >
              <ButtonText
                fontSize={16}
                fontWeight="$bold"
                color={
                  activeCategory === "Participant" ? "$white" : "$neutral9"
                }
              >
                For Participant
              </ButtonText>
            </Button>
          </HStack>
        </HStack>
      </View>

      {loading ? (
        // Render loading indicator
        <>
          <Spinner size="large" />
        </>
      ) : (
        <>
          <View>
            <View py="$0" h="$full">
              <FlatList
                data={
                  filteredInboxData.length > 0 ? filteredInboxData : InboxData
                }
                renderItem={({ item }) => (
                  <View
                    backgroundColor="$gray0"
                    borderBottomWidth="$2"
                    borderColor="$warning5"
                    py={4}
                  >
                    <Link href="(app)/inbox/inbox_detail" push>
                      <HStack alignItems="center" flexDirection="row">
                        <AlertIcon
                          as={CheckCircleIcon}
                          color="$neutral9"
                          size="xl"
                          mx={10}
                        />

                        <VStack flexDirection="column" gap={10}>
                          <Text
                            color="$neutral9"
                            fontSize={18}
                            fontWeight="$bold"
                          >
                            {item.subject}
                          </Text>

                          <Text fontSize={12} color="$black">
                            {item.body}
                          </Text>

                          <Text fontSize="$xs" color="$neutral5">
                            {formattedDate(item.created_at)}
                          </Text>
                        </VStack>
                      </HStack>
                    </Link>
                  </View>
                )}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor="#000"
                  />
                }
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Inbox;
