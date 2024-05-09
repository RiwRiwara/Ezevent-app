// app/components/explore/TitleBar.tsx

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import {
  useStyled,
  Text,
  HStack,
  VStack,
  Box,
  Image,
  Center,
  ScrollView,
} from "@gluestack-ui/themed";
import ButtonSet from "./StatusButtonSet";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";
import { StatusMyEvent } from "@services/api/event/myevent/ApiMyEvent";
import { retrieveToken } from "@utils/RetrieveToken";

const ButtonWhiteSet = ({ title, status, event_participant_id }) => {
  const styled = useStyled();
  // [Normal, Cancelled, Removed, Late]
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await retrieveToken();
      setToken(token);
    };

    getToken();
  }, []);

  const handleApiCall = () => {
    // console.log(status)
    // console.log(event_participant_id)
    console.log(status);
    console.log(event_participant_id);
    StatusMyEvent(event_participant_id, status, token)
      .then((response) => {
        console.log("API call successful:", response);
      })
      .catch((error) => {
        console.log("API call error:", error);
      });
  };
  return (
    <ButtonGroup>
      <Button
        bg="$gray0"
        w={100}
        h={30}
        borderRadius={2}
        onPress={handleApiCall}
      >
        <ButtonText
          fontSize="$small_2"
          alignItems="center"
          fontWeight="$bold"
          color="$danger5"
        >
          {title}
        </ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonWhiteSet;
