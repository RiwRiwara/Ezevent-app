// app/components/explore/TitleBar.tsx

import React, { useState, useEffect } from "react";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";
import { StatusMyEvent } from "@services/api/event/myevent/ApiMyEvent";
import { retrieveToken } from "@utils/RetrieveToken";

const StatusButtonSet = ({ title, color}) => {
 // [Normal, Cancelled, Removed, Late]
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await retrieveToken();
      setToken(token);
    };
    
    getToken();
  }, []);


  return (
    <ButtonGroup>
      <Button bg={color} w={100} h={30} borderRadius={2} >
        <ButtonText fontSize="$small_2" alignItems="center" color="$gray0">{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default StatusButtonSet;
