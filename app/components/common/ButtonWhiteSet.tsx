// app/components/explore/TitleBar.tsx

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
import ButtonSet from "../common/ButtonSet";
import { Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed";

const ButtonWhiteSet = ({title}) => {
    const styled = useStyled();
  return (
    <ButtonGroup>
                  <Button bg="$gray0" w={100} h={30} borderRadius={2}>
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
