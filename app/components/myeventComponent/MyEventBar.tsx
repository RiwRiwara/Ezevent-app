// app/components/explore/ScrollableList.tsx

import React from "react";
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
import {AlignRight, Menu} from "lucide-react-native";

const MyEventBar = ({title}) => {
  const styled = useStyled();
  const neutral9 = styled.config.tokens.colors.neutral9;
  return (
    <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        mb={10}
        height={48}
        bg="$gray0"
        alignItems="center"
        borderBottomColor="$gray1"
        borderBottomWidth={1}
      >
        <Text fontSize={20} fontWeight="$bold" color="$neutral9">
          {title}
        </Text>
        <AlignRight size={36} strokeWidth={1} color={neutral9} />
    </HStack>
  );
};

export default MyEventBar;
