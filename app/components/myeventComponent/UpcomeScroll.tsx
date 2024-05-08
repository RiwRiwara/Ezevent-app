import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Box,
  Text,
  Image,
  View,
  VStack,
} from "@gluestack-ui/themed";
import UpcomeCard from "./UpcomeCard";
import { useLocalSearchParams } from "expo-router";
import { GetStatusMyEvents } from "@services/api/event/myevent/ApiMyEvent";
import { retrieveToken } from "@utils/RetrieveToken";

export default function UpcomeScroll(props) {
  const {
    type,
    progress,
    status,
    titleBtn = "Cancel",
    colorBtn = "$danger5",
    whiteBtn = "Cancel",
    statusCheck,
    action,
  } = props;
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const token = await retrieveToken();
      setToken(token);
    };

    getToken();
  }, []);
  useEffect(() => {
    setLoading(true);
    GetStatusMyEvents(type, progress, status, token)
      .then((data) => {
        setEventData(data.events);
      })
      .catch((error) => {
        console.error("[MyEventScroll] : Error fetching all events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  return (
    <ScrollView>
      {loading ? (
        // Render loading indicator
        <VStack alignItems="center">
          <View>
            <Image
              w={200}
              h={90}
              alt="Loading..."
              mr={10}
              source={{
                uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b95233eb5ffk4f46u9soryvb0lwvdtee43ke6oe6mkol&ep=v1_gifs_search&rid=200w.gif&ct=g",
              }}
            />
          </View>
        </VStack>
      ) : eventData.length === 0 ? (
        <View alignItems="center">
          <Text>No events found</Text>
        </View>
      ) : (
        eventData.map((event, index) => (
          <UpcomeCard
            key={index}
            titleBtn={titleBtn}
            colorBtn={colorBtn}
            myevent={event}
            whiteBtn={whiteBtn}
            status={statusCheck}
            action={action}
          />
        ))
      )}
    </ScrollView>
  );
}
