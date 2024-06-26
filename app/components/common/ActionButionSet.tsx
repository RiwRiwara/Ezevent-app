// app/components/explore/TitleBar.tsx

import React, { useState, useEffect } from "react";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";
import { ActionMyevent } from "@services/api/event/myevent/ApiMyEvent";
import { retrieveToken } from "@utils/RetrieveToken";
import {router} from "expo-router";

const ActionButionSet = ({ title, color, action, event_participant_id, }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await retrieveToken();
      setToken(token);
    };
    
    getToken();
  }, []);
  const handleApiCall = () => {
    ActionMyevent(action, event_participant_id, token)
      .then((response) => {
        // Handle successful API response
        router.replace('/(app)/myevent');
        console.log("API call successful:", response);
      })
      .catch((error) => {
        // Handle API call error
        console.log("API call error:", error);
      });
  };

  return (
    <ButtonGroup>
      <Button bg={color} w={100} h={30} borderRadius={2} onPress={handleApiCall}>
        <ButtonText fontSize="$small_2" alignItems="center" color="$gray0">{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ActionButionSet;
