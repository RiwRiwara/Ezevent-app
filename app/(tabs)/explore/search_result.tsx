import { Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, Link } from "expo-router";
import { useSession } from "@providers/ctx";
import {
  FlatList,
  Box,
  Heading,
  View,
  HStack,
  VStack,
  Text,
  Center,
  useStyled,
  Image,
  Button,
} from "@gluestack-ui/themed";
import { Ellipsis } from "lucide-react-native";
import { GetEventsByQuery } from "@services/api/event/ApiEvent";
import SearchFilter from "@components/exploreComponent/SearchFilter";
import { Search } from "lucide-react-native";
import { useNavigation, useLocalSearchParams } from "expo-router";

type EventItem = {
  event_id: string;
  getBannerImage: string;
  date_start: string;
  event_name: string;
  venue: string;
};

const Search_result = () => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [events, setEvents] = useState<EventItem[]>([]);
  const limitCharacter = (text, limit) => {};

  const [showSearchFilter, setShowSearchFilter] = React.useState(false);
  const handleCloseSearchFilter = () => setShowSearchFilter(!showSearchFilter);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    var search_query = "";
    if (params.name !== undefined) {
      search_query = "&name=" + params.name.toString();
    }
    console.log("search_query", search_query);
    GetEventsByQuery(1, search_query)
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => {
        console.log(
          "[EventCardScroller] : Error fetching all events:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {/* Header */}
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={Platform.OS === "ios" ? 50 : 65}
          pt={Platform.OS === "ios" ? 0 : 25}
          top={Platform.OS === "ios" ? 0 : 0}
          backgroundColor="$neutral6"
          alignItems="center"
        >
          <Text fontSize="$title_4" fontWeight="$bold" color="$gray0">
            Search Result
          </Text>

          <Button
            px={9}
            onPress={handleCloseSearchFilter}
            backgroundColor="$neutral6"
          >
            <Search
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.gray0}
            />
          </Button>
        </HStack>
      </VStack>
      <View>
        <FlatList
          data={events}
          renderItem={({ item }: { item: EventItem }) => (
            <Box borderBottomWidth="$2" borderColor="$warning5" py="$2">
              <Link href={`/event/${item.event_id}`} push>
                <HStack space="md" justifyContent="space-between">
                  <Image
                    size="md"
                    mr="$3"
                    ml="$3"
                    alt="IMG"
                    source={{
                      uri: item.getBannerImage,
                    }}
                  />
                  <VStack flex={1}>
                    <Text color="$rose600" fontWeight="$bold" size="2xs">
                      {item.date_start}
                    </Text>
                    <Text color="$neutral9" size="md">
                      {item.event_name}
                    </Text>
                    <Text fontSize="$xs" color="$coolGray800">
                      {item.venue}
                    </Text>
                  </VStack>
                </HStack>
              </Link>
            </Box>
          )}
        />
      </View>
    </View>
  );
};

export default Search_result;
