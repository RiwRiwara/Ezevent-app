// app/components/explore/TitleBar.tsx

import React, { useState } from "react";
import { Text, HStack } from "@gluestack-ui/themed";
import { ChevronLeft, EllipsisVertical } from "lucide-react-native";
import { useStyled } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const TitleBarBack = ({ title, button = true }) => {
  const styled = useStyled();
  const gray0 = styled.config.tokens.colors.gray0;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <HStack
      justifyContent="space-between"
      px={15}
      py={10}
      height={45}
      bg="$neutral6"
      alignItems="center"
    >

      {true && <ChevronLeft size={36} strokeWidth={2} color={gray0} onPress={handleBack}/>}
      {true && <EllipsisVertical size={36} strokeWidth={2} color={gray0} />}
    </HStack>
  );
};

export default TitleBarBack;
