import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, Link } from "expo-router";
import { useSession } from "@providers/ctx";
import {
    FlatList,
    Box,
    Heading,
    HStack,
    VStack,
    Text,
    Center,
    useStyled,
    Image,
    Button,
} from '@gluestack-ui/themed';
import { Ellipsis } from 'lucide-react-native';
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
  const limitCharacter = (text, limit) => {
    
  };

  const [showSearchFilter, setShowSearchFilter] = React.useState(false);
  const handleCloseSearchFilter = () => setShowSearchFilter(!showSearchFilter);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      var search_query = ""
      if (params.name !== undefined) {
        search_query = "&name=" + params.name.toString();
      }
      GetEventsByQuery(1, search_query)
        .then((data) => {
          setEvents(data.events);
        })
        .catch((error) => {
          console.error(
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
        <Box py="$10">
          <HStack mx='$3' justifyContent="space-between">
            <Heading size="xl" color="$neutral9">Search Result</Heading>
            <Center>
            <Ellipsis size={25} strokeWidth={2} color={neutral9}/>
            <Button px={9} onPress={handleCloseSearchFilter} backgroundColor="$neutral6">
            <Search
              size={30}
              strokeWidth={2}
              color={styled.config.tokens.colors.gray0}
            />
            </Button>
            <SearchFilter isOpen={showSearchFilter} onClose={handleCloseSearchFilter} />
            </Center>
          </HStack>
          <FlatList
            data={events}
            renderItem={({ item }: { item: EventItem }) => (
              <Box
                borderBottomWidth="$2"
                borderColor="$warning5"
                py="$2"
              >
              <Link href={`/event/${item.event_id}`} push>
              <HStack space="md" justifyContent="space-between">
                
                  <Image
                    size="md"
                    mr="$3" 
                    ml='$3'
                    alt='IMG'
                    source={{
                        uri: item.getBannerImage,
                    }}
                    />
                <VStack flex={1}>
                  <Text
                    color="$rose600"
                    fontWeight="$bold"
                    size='2xs'
                  >
                    {item.date_start}
                  </Text>
                  <Text 
                  color="$neutral9"
                  size='md'
                  >
                  {item.event_name}
                  </Text>
                  <Text
                  fontSize="$xs"
                  color="$coolGray800"
                  >
                  {item.venue}
                </Text>
                </VStack>
              </HStack>
              </Link>
              </Box>
            )}
          />
        </Box>
    </View>
  );
};

export default Search_result;
