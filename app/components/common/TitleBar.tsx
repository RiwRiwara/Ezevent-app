// app/components/explore/TitleBar.tsx

import React, { useState } from "react";
import { Text, HStack } from "@gluestack-ui/themed";
import { CalendarCheck } from "lucide-react-native";
import { useStyled } from "@gluestack-ui/themed";

const TitleBar = ({ title, button = false }) => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;

  return (
    <HStack
      justifyContent="space-between"
      px={15}
      py={10}
      height={48}
      bg="$gray0"
      alignItems="center"
    >
      <Text fontSize="$title_4" fontWeight="$bold" color="$neutral9">
        {title}
      </Text>
      {button && <CalendarCheck size={36} strokeWidth={2} color={neutral9} />}
    </HStack>
  );
};

export default TitleBar;
