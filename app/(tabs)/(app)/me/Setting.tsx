import React from "react";
import { Redirect, Stack, Link } from "expo-router";
import { useSession } from "@providers/ctx";
import { Text, VStack, HStack } from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import { Bell, Edit, User } from "lucide-react-native";
import { useStyled } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

const Setting = () => {
  const styled = useStyled();
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <VStack>
      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        alignItems="center"
      >
        <Text color="$primary9">Edit Profile</Text>
        <Edit
          size={30}
          strokeWidth={2}
          color={styled.config.tokens.colors.primary9}
        ></Edit>
      </HStack>

      <TouchableOpacity onPress={() => {router.push('/(app)/me/Push_Notification');}}>
      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        alignItems="center"
      >
          <Text color="$primary9">Push Notifications</Text>
          <Bell
            size={30}
            strokeWidth={2}
            color={styled.config.tokens.colors.primary9}
          ></Bell>
      </HStack>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={changeLanguage}>
        <HStack
          justifyContent="space-between"
          px={15}
          py={10}
          height={48}
          alignItems="center"
        >
          <Text color="$primary9">Change Language</Text>
          <Text color="$primary9">{t("language")}</Text>
        </HStack>
      </TouchableOpacity>

      <HStack
        justifyContent="space-between"
        px={15}
        py={10}
        height={48}
        alignItems="center"
      >
        <Text color="$primary9">Manage Account</Text>
        <User
          size={30}
          strokeWidth={2}
          color={styled.config.tokens.colors.primary9}
        ></User>
      </HStack>
    </VStack>
    
  );
};

export default Setting;