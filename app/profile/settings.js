import React, { useTransition } from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import { Link } from "expo-router";
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";

export default function Settings() { 

  const {t, i18n} = useTranslation();

  const changeLanguage = () =>{
    if(i18n.language === 'en'){
      i18n.changeLanguage('th')
    }else{
      i18n.changeLanguage('en')
    }
  }
  return (
    <View>
      <Text>{t('setting')}</Text>
      <TouchableOpacity onPress={changeLanguage}>
        <Text>{t('change_lang')}</Text>
      </TouchableOpacity>
      <Link href="/">{t('back')}</Link>
    </View>
  );
}
