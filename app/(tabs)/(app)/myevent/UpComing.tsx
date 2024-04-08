import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import {
  useStyled,
  ScrollView,
  Switch,
  VStack,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import MyEventCard from "@components/myeventComponent/MyEventCard";

const UpComing = () => {
  const styled = useStyled();
  const { t } = useTranslation();

  return (
    <View bg="$gray0">
      <MyEventBar title="List of upcoming events" />
      <ScrollView bg="$gray0">
        <MyEventCard titleBtn="Cancel" colorBtn="$danger5" />
        <MyEventCard titleBtn="Cancel" colorBtn="$danger5" />

      </ScrollView>
    </View>
  );
};

export default UpComing;
