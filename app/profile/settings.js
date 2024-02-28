import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import { useTranslation } from "react-i18next";
import { COLORS } from '../../config/color';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {config} from '../../config/gluestack-ui.config';
import { GluestackUIProvider,Switch  } from "@gluestack-ui/themed";

const SettingsRow = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowSpacer} />
      <View style={styles.rowIcon}>
        <FeatherIcon color={COLORS.primary9} name={icon} size={20} />
      </View>
    </TouchableOpacity>
  );
};

const Settings = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('th');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <GluestackUIProvider config={config}>
      <View>
        <SettingsRow
          label={t('edit_profile')}
          icon="edit"
          onPress={() => {
            // handle onPress
          }}
        />
        <SettingsRow
          label={t('push_noti')}
          icon="bell"
          onPress={() => {
            router.push('/profile/settings_notification');
          }}
        />
        <TouchableOpacity onPress={changeLanguage} style={styles.row}>
          <Text style={styles.rowLabel}>{t('change_lang')}</Text>
          <View style={styles.rowSpacer} />
          <Text style={styles.rowLabel}>{t('language')}</Text>
        </TouchableOpacity>
        <SettingsRow
          label={t('manage_account')}
          icon="user"
          onPress={() => {
            // handle onPress
          }}
        />
      </View>
    </GluestackUIProvider>

  );
};

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

export default Settings;
