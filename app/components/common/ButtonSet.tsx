// app/components/explore/TitleBar.tsx

import React, { useState } from "react";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";

const ButtonSet = ({ title, color }) => {

  return (
    <ButtonGroup>
      <Button bg={color} w={100} h={30} borderRadius={2}>
        <ButtonText fontSize="$small_2" alignItems="center" color="$gray0">{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSet;
