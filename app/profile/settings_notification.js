import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";
import { COLORS } from '../../config/color'
import {config} from '../../config/gluestack-ui.config';
import { GluestackUIProvider, Switch } from "@gluestack-ui/themed";


export default function Settings() {

    const { t } = useTranslation();

    return (
        <GluestackUIProvider config={config}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        // handle onPress
                    }}
                    style={styles.row}>

                    <Text style={styles.rowLabel}>{t('enable_noti')}</Text>

                    <View style={styles.rowSpacer} />

                    <Switch size="md" isDisabled={false} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // handle onPress
                    }}
                    style={styles.row}>

                    <Text style={styles.rowLabel}>{t('send_noti_email')}</Text>

                    <View style={styles.rowSpacer} />
                    <Switch size="md" isDisabled={false} />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // handle onPress
                    }}
                    style={styles.row}>

                    <Text style={styles.rowLabel}>{t('send_noti_sms')}</Text>

                    <View style={styles.rowSpacer} />
                    <Switch size="md" isDisabled={false} />
                </TouchableOpacity>
            </View>
        </GluestackUIProvider>

    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
    },
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: COLORS.primary9,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});