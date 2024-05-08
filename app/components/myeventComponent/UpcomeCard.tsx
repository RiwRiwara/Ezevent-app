import React from "react";
import {
  useStyled,
  Text,
  HStack,
  VStack,
  Box,
  Image,
  Center,
  ScrollView,
  View,
  Card,
} from "@gluestack-ui/themed";
import ActionButionSet from "../common/ActionButionSet";
import ButtonWhiteSet from "../common/ButtonWhiteSet";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function UpcomeCard({
  whiteBtn,
  titleBtn,
  colorBtn,
  myevent = {
    event_id: "",
    event_name: "",
    getBannerImage: "",
    date_start: "",
    event_location: "",
    venue: "",
    event_participants: {},
  },
  status,
  action,
}) {
  const styled = useStyled();
  return (
    <View w="$full" alignItems="center">
      <Link href={`/event/${myevent.event_id}`} push>
        <HStack w="$full" h={150}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            w="$1/3"
            px={5}
          >
            <VStack alignItems="center" w="$full">
              <Image
                h="$32"
                w="$24"
                alt="IMG"
                // m="$10"
                borderRadius={10}
                borderWidth="$2"
                borderColor="$gray7"
                source={{
                  uri: myevent.getBannerImage,
                }}
              />
            </VStack>
          </HStack>
          <HStack w="$2/3" py={10}>
            <VStack justifyContent="space-between" w="$full" px={5}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="$small_3" color="$danger6">
                  {myevent.date_start}
                </Text>

                <Box bg="$primary0" borderRadius={5} alignItems="center" px={2}>
                  <Text
                    fontSize="$small_3"
                    fontWeight="$bold"
                    color="$neutral9"
                  >
                    {myevent.venue}
                  </Text>
                </Box>
              </HStack>
              <Text fontSize="$paragraph" fontWeight="$bold" color="$neutral9">
                {myevent.event_name.length > 20
                ? `${myevent.event_name.substring(0, 25)}`
                : myevent.event_name}
              </Text>

              {/* {myevent.event_location && myevent.event_location.length > 20
                ? `${myevent.event_location.substring(0, 30)}`
                : myevent.event_location} */}

              {/* <Text fontSize="$small_2">
              
                {myevent.event_location}
            </Text> */}

              <HStack justifyContent="flex-end">
                <ButtonWhiteSet title={whiteBtn} status={status} event_participant_id={myevent.event_participants[0].event_participant_id} ></ButtonWhiteSet>
                <ActionButionSet title={titleBtn} color={colorBtn} event_participant_id={myevent.event_participants[0].event_participant_id} action={action}></ActionButionSet>
              </HStack>
            </VStack>
          </HStack>
        </HStack>
      </Link>
    </View>
  );
}
