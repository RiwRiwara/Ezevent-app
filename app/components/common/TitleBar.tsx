// app/components/explore/TitleBar.tsx

import React, { useState } from "react";
import { Text, HStack } from "@gluestack-ui/themed";
import { CalendarCheck } from "lucide-react-native";
import { useStyled } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const TitleBar = ({ title, button = false }) => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;

  return (
    <HStack
      justifyContent="space-between"
      px={15}
      py={10}
      height={45}
      bg="$gray0"
      alignItems="center"
      style={styles.borderbt}
    >
      <Text fontSize="$title_4" fontWeight="$bold" color="$neutral9">
        {title}
      </Text>
      {button && <CalendarCheck size={36} strokeWidth={2} color={neutral9} />}
    </HStack>
  );
};

const styles = StyleSheet.create({
  borderbt: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});

export default TitleBar;
