import React from "react";
import {
  Card,
  Button,
  HStack,
  VStack,
  Heading,
  Text,
  View,
  ButtonText,
} from "@gluestack-ui/themed";
import { Redirect, Link, useLocalSearchParams, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react-native";
import { GetEventDetail } from "@services/api/event/ApiEvent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const inbox_detail = () => {
  const params = useLocalSearchParams();
  let item = null;
  try {
    item = params.item ? JSON.parse(params.item) : null;
    console.log(item);
  } catch (error) {
    console.error("Error parsing item object:", error);
  }
  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}.${formattedMinutes} ${formattedDay}-${formattedMonth}-${year}`;
  };
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState({ html: "" });
  const [localToken, setLocalToken] = useState(null);
  const [eventDetail, setEventDetail] = useState([]);
  
  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        return token;
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    retrieveToken().then((token) => {
      setLocalToken(token);
    });
  });
  const event_id = item.event_id.toString();
  useEffect(() => {
    setLoading(true);
    console.log(event_id);
    GetEventDetail(event_id)
      .then((data) => {
        setSource({ html: data.event.content });
        setEventDetail(data.event);
      })
      .catch((error) => {
        console.error("[EventDetail] : Error fetching event detail:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [localToken]);

  return (
    <View>
      <HStack
        justifyContent="flex-start"
        backgroundColor="$neutral6"
        px={5}
        py={10}
        alignItems="center"
        borderBottomWidth="$2"
        borderColor="$neutral9"
      >
        <Link href="/inbox">
          <ChevronLeft
            size={35}
            absoluteStrokeWidth
            strokeWidth={3}
            color="#ffffff"
          />
        </Link>
        <Text color="$gray0" fontWeight="bold" fontSize={20}>
          {item?.subject || "Inbox Subject"}
        </Text>
      </HStack>

      <VStack p={10} justifyContent="space-between">
        <View>
          <HStack>
            <Text fontWeight="bold" color="$neutral9" mr="$3" size="sm">
              เวลา:
            </Text>
            <Text color="$neutral9" size="sm">
              {formattedDate(item?.created_at) || "00-00-0000"}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold" color="$neutral9" mr="$3" size="sm">
              กิจกรรม:
            </Text>
            <Text color="$neutral9" size="sm">
              {eventDetail?.event_name || "Event Name"}
            </Text>
          </HStack>
          <HStack borderBottomWidth="$2" borderColor="$neutral9" mb="$3">
            <Text fontWeight="bold" color="$neutral9" mr="$3" size="sm" mb="$3">
              ถึง:
            </Text>
            <Text color="$neutral9" size="sm" mb="$3">
              {item?.inbox_type || "Inbox Type"}
            </Text>
          </HStack>
          <Text fontWeight="bold" size="2xl" color="$neutral9" mb="$3">
            {item?.subject || "Inbox Subject"}
          </Text>
          <Text color="$neutral9" size="md" mb="$3">
            {item?.body || "Inbox Body"}
          </Text>
        </View>

        <View>
          <VStack>
            <Button mb="$3" bg="$neutral6">
              <ButtonText color="$white" size="lg">
                Contact
              </ButtonText>
            </Button>
            <HStack justifyContent="space-between">
              <Button flex={1} mr="$3" bg="$warning5">
                <ButtonText color="$white" size="lg">
                  Mark as Read
                </ButtonText>
              </Button>
              <Button bg="$danger5">
                <ButtonText color="$white" size="lg">
                  Delete
                </ButtonText>
              </Button>
            </HStack>
          </VStack>
        </View>
      </VStack>
    </View>
  );
};

export default inbox_detail;
