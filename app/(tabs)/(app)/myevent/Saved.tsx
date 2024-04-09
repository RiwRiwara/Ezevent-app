import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import { useStyled, ScrollView, HStack, Switch, VStack, Text, View, ThreeDotsIcon } from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import MyEventBar from "@components/myeventComponent/MyEventBar";
import MyEventCard from "@components/myeventComponent/MyEventCard";
import { DotIcon } from "lucide-react-native";
const Saved = () => {
  const styled = useStyled();
  const {t} = useTranslation();
  const neutral9 = styled.config.tokens.colors.neutral9;
  return (
    <View bg="$gray0">
    <MyEventBar title="List of saved events" />
      <ScrollView bg="$gray0">
        <MyEventCard titleBtn="View" colorBtn="$primary4" />
        <MyEventCard titleBtn="View" colorBtn="$primary4" />

      </ScrollView>
    </View>
  );
};

export default Saved;
