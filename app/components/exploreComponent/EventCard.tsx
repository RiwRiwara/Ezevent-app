import React from "react";
import {
  Box,
  Text,
  Image,
  Card,
  Heading,
  HStack,
  VStack,
  View,
  LinkText,
  Icon,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function EventCard({
  event = {
    event_name: "Event 1",
    getBannerImage: "https://via.placeholder.com/150",
  },
}) {
  return (
    <Link
      href={{
        pathname: `/event/${event.event_id}`,
        params: { name: event.event_name},
      }}
      push
    >
      <View>
        <Card p="$2" borderRadius="$lg" w={170} mr={10} h={350}>
          <>
            <Image
              mb="$6"
              h={200}
              w="$full"
              borderRadius="$md"
              alt={event.event_name}
              source={{
                uri: event.getBannerImage,
              }}
            />
            <Text
              fontSize="$sm"
              fontFamily="$heading"
              fontWeight="$normal"
              lineHeight="$sm"
              mb="$2"
              sx={{
                color: "$textLight700",
                _dark: {
                  color: "$textDark200",
                },
              }}
            >
              {event.date_start}
            </Text>
          </>

          <>
            <Heading size="sm" fontFamily="$heading" mb="$4">
              {event.event_name.length > 30
                ? `${event.event_name.substring(0, 30)}...`
                : event.event_name}
            </Heading>
          </>
        </Card>
      </View>
    </Link>
  );
}
