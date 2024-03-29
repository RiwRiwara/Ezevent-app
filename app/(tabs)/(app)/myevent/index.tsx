import { View, Text } from 'react-native'
import React from 'react'
import '@i18n/i18n.config';
import { useTranslation } from "react-i18next";
import Participant_summary_type from '@components/participant_summary_type';
import Organizer_summary_type from '@components/organizer_summary_type';

const myevent = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Participant_summary_type />
      <Organizer_summary_type />
    </View>
  )
}

export default myevent