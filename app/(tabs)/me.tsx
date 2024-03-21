import { View, Text } from 'react-native'
import React from 'react'
import '../../src/i18n/i18n.config';
import { useTranslation } from "react-i18next";
import Participant_summary_type from '../components/participant_summary_type';
import Organizer_summary_type from '../components/organizer_summary_type';

const me = () => {
  const {t} = useTranslation();
  return (
    <View>
        <Text>
            Profile
        </Text>
    </View>
  )
}

export default me