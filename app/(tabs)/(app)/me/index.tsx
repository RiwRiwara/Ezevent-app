import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { Redirect } from "expo-router";
import { useSession } from "@providers/ctx";
import { Text } from "@gluestack-ui/themed";

const me = () => {
  const { session } = useSession();
  const [showActionsheet, setShowActionsheet] = useState(false);

  return (
    <>
      <Text>sdsd</Text>
    </>
  );
};

export default me;
