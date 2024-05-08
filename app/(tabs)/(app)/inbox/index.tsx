import { StyleSheet, RefreshControl, Platform } from "react-native";
import React,{ useState, useEffect } from "react";
import { Redirect, Stack, Link } from "expo-router";
import { useSession } from "@providers/ctx";
import TitleBar from "@components/common/TitleBar";

import {
  FlatList,
  Box,
  View,
  Heading,
  HStack,
  VStack,
  Text,
  Center,
  AlertIcon,
  CheckCircleIcon,
  useStyled,
} from "@gluestack-ui/themed";
import { Ellipsis } from "lucide-react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type InboxProps = { title: string };

const Item = ({ title }: InboxProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const Inbox = () => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;

  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    
  }, []);

  return (
    <View backgroundColor="$gray0">
      <TitleBar title="Inbox" />

      <VStack mt={10} h="100%">
        <HStack justifyContent="space-between" px={10} mb={10}>
          <HStack flexDirection="row" gap={10}>
            <View
              bg="$neutral1"
              borderRadius={5}
              justifyContent="center"
              px={10}
            >
              <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9">
                Unread
              </Text>
            </View>
            <View
              bg="$neutral8"
              borderRadius={5}
              justifyContent="center"
              px={10}
            >
              <Text fontSize="$small_3" fontWeight="$bold" color="$white">
                For Staff
              </Text>
            </View>
            <Box
              bg="$neutral1"
              borderRadius={5}
              justifyContent="center"
              px={10}
            >
              <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9">
                For Participant
              </Text>
            </Box>
          </HStack>
          <Ellipsis size={35} strokeWidth={3} color={neutral9} />
        </HStack>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <VStack
              borderBottomWidth="$2"
              borderColor="$warning5"
              p="$3"
              backgroundColor="$neutral0"
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
                      for staff / Help the world by your hand
                    </Text>
                    <Text color="$black">ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วน</Text>
                  </VStack>
                  <Text
                    fontSize="$xs"
                    color="$coolGray800"
                    alignSelf="center"
                    bold
                  >
                    24 min ago
                  </Text>
                </HStack>
              </Link>
            </VStack>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#000"
            />
          }
        />
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  borderbt: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});

export default Inbox;
