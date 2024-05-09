import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { useSession } from "@providers/ctx";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";

import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  ScrollView,
  Box,
  Avatar,
  AvatarImage,
  Image,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { retrieveToken } from "@utils/RetrieveToken";
import {useLocalSearchParams} from "expo-router";

const EditProfile = () => {
  const [loading, setLoading] = useState(true);

  // Local params
  return (
    <View backgroundColor="$gray0">
      <Text>-</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderbt: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});

export default EditProfile;
