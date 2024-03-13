import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";
import { COLORS } from '../../config/color'
import { config } from '../../config/gluestack-ui.config';
import { GluestackUIProvider, Switch, Button, VStack } from "@gluestack-ui/themed";


export default function Settings() {

    const { t } = useTranslation();

    return (
        <GluestackUIProvider config={config}>
            <VStack>
                <Button
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    height='50px'
                    backgroundColor={COLORS.white}
                    mb='10px'
                    paddingLeft='15px'
                    paddingRight='10px'>
                    <Text style={styles.rowLabel}>{t('enable_noti')}</Text>                    
                    <View style={styles.rowSpacer} />
                    <Switch size="md" isDisabled={false} />

                </Button>
                <Button
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    height='50px'
                    backgroundColor={COLORS.white}
                    mb='10px'
                    paddingLeft='15px'
                    paddingRight='10px'>
                    <Text style={styles.rowLabel}>{t('send_noti_email')}</Text>
                    <View style={styles.rowSpacer} />
                    <Switch size="md" isDisabled={false} />

                </Button>
                <Button
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    height='50px'
                    backgroundColor={COLORS.white}
                    mb='10px'
                    paddingLeft='15px'
                    paddingRight='10px'>
                    <Text style={styles.rowLabel}>{t('send_noti_sms')}</Text>
                    <View style={styles.rowSpacer} />
                    <Switch size="md" isDisabled={false} />

                </Button>
            </VStack>
        </GluestackUIProvider>

    );
}

const styles = StyleSheet.create({
    rowLabel: {
        color: COLORS.primary9,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});