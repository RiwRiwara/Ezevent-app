import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import { useTranslation } from "react-i18next";
import { COLORS } from '../../config/color';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { config } from '../../config/gluestack-ui.config';
import { VStack, Button, GluestackUIProvider, Switch } from "@gluestack-ui/themed";

const SettingsRow = ({ label, icon, onPress }) => {
  return (
    <Button onPress={onPress}
      flexDirection='row'
      alignItems='center'
      justifyContent='flex-start'
      height='50px'
      backgroundColor={COLORS.white}
      mb='10px'
      paddingLeft='15px'
      paddingRight='10px'
      
    >
      <Text fontSize= "2em" fontWeight= '$bold' style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowSpacer} />
      <View 
      width= '32px'
      height= '32px'
      mr= '20px'
      flexDirection= 'row'
      alignItems= 'center'
      justifyContent= 'center'>
        <FeatherIcon color={COLORS.primary9} name={icon} size={20} />
      </View>
    </Button>
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
      <VStack>
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
        <Button onPress={changeLanguage}
          flexDirection='row'
          alignItems='center'
          justifyContent='flex-start'
          height='50px'
          backgroundColor={COLORS.white}
          mb='10px'
          paddingLeft='15px'
          paddingRight='10px'>
          <Text style={styles.rowLabel}>{t('change_lang')}</Text>
          <View style={styles.rowSpacer} />
          <Text style={styles.rowLabel}>{t('language')}</Text>
        </Button>
        <SettingsRow
          label={t('manage_account')}
          icon="user"
          onPress={() => {
            // handle onPress
          }}
        />
      </VStack>
    </GluestackUIProvider>

  );
};

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

export default Settings;
