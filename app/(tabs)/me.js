import { Button } from '@gluestack-ui/themed';
import { useRouter} from 'expo-router';
import React from 'react';
import { View, Text} from 'react-native';
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";


const Me = () => {
  const router = useRouter();
  const {t} = useTranslation();

  return (
    <View>
      <Button onPress={()=> router.push('/profile/settings')}><Text>{t('setting')}</Text></Button>
    </View>
  );
};

export default Me;
