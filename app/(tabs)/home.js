import { View, Text } from "react-native";
import React from "react";
import "../../src/i18n/i18n.config";
import { useTranslation } from "react-i18next";
import Canceled_complete from "../components/canceled_complete";
import Reviewed_complete from "../components/reviewed_complete";
import Save_complete from "../components/save_complete";
import Submit_complete from "../components/submit_complete";
import Checkin_complete from "../components/checkin_complete";

const home = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t("home")}</Text>
      <Reviewed_complete />
    </View>
  );
};

export default home;
