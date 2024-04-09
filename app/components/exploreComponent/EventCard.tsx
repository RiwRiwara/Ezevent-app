import React from "react";
import {
  Box,
  Text,
  Image,
  Card,
  Heading,
  Link,
  HStack,
  LinkText,
  Icon,
} from "@gluestack-ui/themed";

export default function EventCard({
  event = {
    event_name: "Event 1",
    getBannerImage: "https://via.placeholder.com/150",
  },
}) {
  return (
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
          May 15, 2023
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
  );
}
