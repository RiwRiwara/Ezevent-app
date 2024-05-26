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
import { Ellipsis, ChevronLeft } from "lucide-react-native";
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
  const params = useLocalSearchParams();
  const [events, setEvents] = useState<EventItem[]>([]);

  const [showSearchFilter, setShowSearchFilter] = React.useState(false);
  const handleCloseSearchFilter = () => setShowSearchFilter(!showSearchFilter);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("params:", params);

    setLoading(true);
    var search_query = "";
    if (params.name !== undefined && params.name !== "") {
      search_query = "&name=" + params.name.toString();
    }
    if (params.categories !== undefined && params.categories !== "") {
      search_query = search_query + "&categories=" + params.categories.toString();
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
console.log("events", events);
  return (
    <View>
      {/* Header */}
      <View
        backgroundColor="$neutral6"
        pt={Platform.OS !== "web" ? (Platform.OS == "ios" ? 0 : 20) : 0}
      >
        <HStack
          px={6}
          py={3}
          gap={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/explore">
            <ChevronLeft
              size={35}
              absoluteStrokeWidth
              strokeWidth={3}
              color="#ffffff"
            />
          </Link>
          <Text fontSize="$title_4" fontWeight="$bold" color="$gray0">
            Search Result
          </Text>
          <View
            flexDirection="row"
            gap={10}
            alignItems="center"
            justifyContent="center"
          >
          </View>
        </HStack>
      </View>

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
