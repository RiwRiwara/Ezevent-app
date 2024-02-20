import { View, Text } from 'react-native'
import React from 'react'
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";

const inbox = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t('inbox')}</Text>
    </View>
  );
}

export default inbox