import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
// import ButtonSet from "@components/common/ButtonSet";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed";
const inbox = () => {
  return (
    <View>
      <Text>inbox</Text>
      {/* <ButtonSet title="Add" color="$gray5" /> */}
      
    </View>
  );
};

export default inbox;
