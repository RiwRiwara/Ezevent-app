import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { Redirect , Link } from "expo-router";
import { useSession } from "@providers/ctx";
import { Text, useStyled } from "@gluestack-ui/themed";
import { SettingsIcon } from "lucide-react-native";

const me = () => {
  const styled = useStyled();
  const { session } = useSession();
  const [showActionsheet, setShowActionsheet] = useState(false);

  return (
    <>
      <Text>sdsd</Text>
      <Link href={"/(app)/me/Setting"} asChild>
      <SettingsIcon
            size={30}
            strokeWidth={2}
            color={styled.config.tokens.colors.neutral9}
          />
      </Link>
    </>
  );
};

export default me;
