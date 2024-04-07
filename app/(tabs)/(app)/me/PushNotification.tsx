import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@providers/ctx";
import { HStack, Switch, VStack, Text } from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";

const PushNotification = () => {

  const { t } = useTranslation();

  return (
    <VStack>
        <HStack
            justifyContent="space-between"
            px={15}
            py={10}
            height={48}
            alignItems="center"
        >
        <Text color="$primary9">{t('enable_noti')}</Text>
        <Switch size="md" isDisabled={false} />
        </HStack>
        <HStack
            justifyContent="space-between"
            px={15}
            py={10}
            height={48}
            alignItems="center"
        >
        <Text color="$primary9">{t('send_noti_email')}</Text>
        <Switch size="md" isDisabled={false} />
        </HStack>
        <HStack
            justifyContent="space-between"
            px={15}
            py={10}
            height={48}
            alignItems="center"
        >
        <Text color="$primary9">{t('send_noti_sms')}</Text>
        <Switch size="md" isDisabled={false} />
        </HStack>
    </VStack>

  );
};

export default PushNotification;
