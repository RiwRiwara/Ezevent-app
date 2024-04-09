import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import { useTranslation } from "react-i18next";
import {
  useStyled,
  ScrollView,
  HStack,
  Switch,
  View,
  VStack,
  Text,
  Box,
} from "@gluestack-ui/themed";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import MyEventCard from "@components/myeventComponent/MyEventCard";
const Complete = () => {
  const styled = useStyled();
  const {t} = useTranslation();

  return (
    <View bg="$gray0">
      <MyEventBar title="List of completed event" />
      <ScrollView bg="$gray0">
        <MyEventCard titleBtn="Contact" colorBtn="$neutral6" />
        <MyEventCard titleBtn="Contact" colorBtn="$neutral6" />

      </ScrollView>
    </View>
  );
};

export default Complete;
