import { Redirect, Stack, Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { useSession } from "@providers/ctx";
import {
  View,
  FlatList,
  Box,
  Heading,
  HStack,
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

type InboxProps = { title: string };

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
      filteredData = InboxData.filter(
        (item) => item.status === "Unread"
      );
    } else {
      filteredData = InboxData.filter(
        (item) => item.inbox_type === category
      );
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
    console.log("session", session);
    GetMyInbox(session)
      .then((data) => {
        setInboxData(data.data);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("[Inbox] : Error fetching all inboxs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [session]);

  return (
    <View>
      <Box py="$5">
        <Heading size="xl" p="$4" pb="$3" color="$neutral9">
          Inbox
        </Heading>
        <HStack justifyContent="space-between" mr="$3">
          <HStack>
            <Box
              bg={activeCategory === "Unread" ? "$neutral9" : "$warning2"}
              borderRadius={5}
              ml="$3"
              justifyContent="center"
            >
              <Text
                fontSize="$small_3"
                fontWeight="$bold"
                color={activeCategory === "Unread" ? "$white" : "$neutral9"}
                mx={10}
                p="$0.5"
                onPress={() => handleCategoryClick("Unread")}
              >
                Unread
              </Text>
            </Box>
            <Box
              bg={activeCategory === "Staff" ? "$neutral9" : "$warning2"}
              borderRadius={5}
              mx="$2"
              justifyContent="center"
            >
              <Text
                fontSize="$small_3"
                fontWeight="$bold"
                color={activeCategory === "Staff" ? "$white" : "$neutral9"}
                mx={10}
                p="$0.5"
                onPress={() => handleCategoryClick("Staff")}
              >
                For Staff
              </Text>
            </Box>
            <Box 
              bg={activeCategory === "Participant" ? "$neutral9" : "$warning2"}
              borderRadius={5} 
              justifyContent="center">
              <Text
                fontSize="$small_3"
                fontWeight="$bold"
                color={activeCategory === "Participant" ? "$white" : "$neutral9"}
                mx={10}
                p="$0.5"
                onPress={() => handleCategoryClick("Participant")}
              >
                For Participant
              </Text>
            </Box>
          </HStack>
          <Ellipsis size={25} strokeWidth={2} color={neutral9} />
        </HStack>
      </Box>
      {loading ? (
        // Render loading indicator
        <>
          {[...Array(1)].map((_, index) => (
            <View key={index} alignItems="center">
              <Image
                w={200}
                h={90}
                alt="Loading..."
                mr={10}
                source={{
                  uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b95233eb5ffk4f46u9soryvb0lwvdtee43ke6oe6mkol&ep=v1_gifs_search&rid=200w.gif&ct=g",
                }}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          <View>
            <Box py="$0">
              <FlatList
                data={filteredInboxData.length > 0 ? filteredInboxData : InboxData}
                renderItem={({ item }) => (
                  <Box
                    borderBottomWidth="$2"
                    borderColor="$warning5"
                    $base-pl={0}
                    $base-pr={0}
                    $sm-pl="$4"
                    $sm-pr="$5"
                    py="$2"
                  >
                    <Link href="(app)/inbox/inbox_detail" asChild>
                      <HStack space="md" justifyContent="space-between">
                        <Center>
                          <AlertIcon
                            as={CheckCircleIcon}
                            color="$neutral9"
                            size="xl"
                            mr="$3"
                            ml="$3"
                          />
                        </Center>
                        <VStack>
                          <Text color="$neutral9" fontWeight="$bold">
                            {item.subject}
                          </Text>
                          <Text color="$black">{item.body}</Text>
                        </VStack>
                        <Text
                          fontSize="$xs"
                          color="$coolGray800"
                          alignSelf="center"
                          bold
                        >
                          {formattedDate(item.created_at)}
                        </Text>
                      </HStack>
                    </Link>
                  </Box>
                )}
              />
            </Box>
          </View>
        </>
      )}
    </View>
  );
};

export default Inbox;
