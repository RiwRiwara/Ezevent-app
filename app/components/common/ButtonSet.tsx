// app/components/explore/TitleBar.tsx

import React, { useState } from "react";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";

const ButtonSet = ({ title, color }) => {

  return (
    <ButtonGroup>
      <Button bg={color}>
        <ButtonText>{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSet;
