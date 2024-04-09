import React from "react";
import { View} from 'react-native'
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

const inbox = () => {
  const styled = useStyled();
  return (
    <View>
      <Text>inbox</Text>  
          
    </View>
  );
};

export default inbox;
