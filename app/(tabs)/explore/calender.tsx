import { View } from "react-native";
import React from "react";
import { Redirect, Stack, Link, useLocalSearchParams } from "expo-router";
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
import SearchFilter from "@components/exploreComponent/SearchFilter";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { GetEventsByQuery } from "@services/api/event/ApiEvent";
import { useWindowDimensions } from "react-native";


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Calender = () => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;

  const [showSearchFilter, setShowSearchFilter] = React.useState(false);
  const handleCloseSearchFilter = () => setShowSearchFilter(!showSearchFilter);

  const params = useLocalSearchParams();
  const [eventDetail, setEventDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const contentW = useWindowDimensions().width;
  const [source, setSource] = useState({ html: "" });

  useEffect(() => {
    setLoading(true);
    GetEventsByQuery(1, "&name=เทค")
      .then((data) => {
        // TODO
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
            <Heading size="xl" color="$neutral9">Events In 26 Nov 2023</Heading>
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
            data={DATA}
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
              <HStack space="md">
                <Center>
                  <Image
                    size="md"
                    mr="$3" 
                    ml='$3'
                    source={{
                        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    }}
                    />
                </Center>
                <VStack>
                  <Text
                    color="$rose600"
                    fontWeight="$bold"
                    size='2xs'
                  >
                    Sun, 26 Nov 2023 
                  </Text>
                  <Text 
                  color="$neutral9"
                  size='md'
                  >
                  Help the world by your hand
                  </Text>
                  <Text
                  fontSize="$xs"
                  color="$coolGray800"
                  alignSelf="center"
                >
                  Help the world by plant the tree and give the<br />earth cooling, I need volunteer more than 100 
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

export default Calender;
