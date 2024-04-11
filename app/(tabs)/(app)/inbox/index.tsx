import { View } from "react-native";
import React from "react";
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
    AlertIcon,
    CheckCircleIcon,
    useStyled,
} from '@gluestack-ui/themed';
import { Ellipsis } from 'lucide-react-native';
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

type InboxProps = {title: string};

const Item = ({title}: InboxProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const Inbox = () => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;
  return (
    <View>
        <Box py="$10">
          <Heading size="xl" p="$4" pb="$3" color="$neutral9">Inbox</Heading>
          <HStack justifyContent="space-between" mr='$3'>
            <HStack>
            <Box bg="$warning2" borderRadius={5} ml='$3' justifyContent="center">
              <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9" mx={10} p="$0.5">
              Unread
              </Text>
            </Box>
            <Box bg="$neutral9" borderRadius={5} mx='$2' justifyContent="center">
                <Text fontSize="$small_3" fontWeight="$bold" color="$white" mx={10} p="$0.5">
                For Staff
                </Text>
            </Box>
            <Box bg="$warning2" borderRadius={5} justifyContent="center">
                <Text fontSize="$small_3" fontWeight="$bold" color="$neutral9" mx={10} p="$0.5">
                For Participant
                </Text>
            </Box>
            </HStack>
            <Ellipsis size={25} strokeWidth={2} color={neutral9}/>
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
              <HStack space="md" justifyContent="space-between">
                <Center>
                  <AlertIcon as={CheckCircleIcon} color='$neutral9'  size="xl"  mr="$3" ml='$3'/>
                </Center>
                <VStack>
                  <Text
                    color="$neutral9"
                    fontWeight="$bold"
                  >
                    for staff / Help the world by your hand
                  </Text>
                  <Text color="$black">
                  ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วน
                  </Text>
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
              </Box>
            )}
          />
        </Box>
    </View>
  );
};

export default Inbox;
