import { View, Text } from 'react-native'
import React from 'react'
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";

const home = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('home')}</Text>
    </View>
  )
}

export default home