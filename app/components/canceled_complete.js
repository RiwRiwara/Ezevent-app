import React, { useCallback, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  VStack,
  Icon,
  Heading,
  Button,
  ButtonText,
  GluestackUIProvider,
  Text,
  CheckCircleIcon,
  View,
} from "@gluestack-ui/themed";
import { config } from "../../config/gluestack-ui.config";

export default function Canceled_complete() {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["90%"];

  const handlesnapPress = useCallback((index) => {
    sheetRef.current.snapToIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <View>
        <Button onPress={() => handlesnapPress(0)}>
          <ButtonText>Open</ButtonText>
        </Button>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView style={styles.container}>
            <Icon
              as={CheckCircleIcon}
              color="$success7"
              $dark-color="$success300"
              w={100}
              h={100}
              alignSelf="center"
            />
            <VStack space="sm" alignItems="center">
              <Heading size="lg" color="#053F5C">
                Canceled Complete!
              </Heading>
            </VStack>
            <Text size="sm" textAlign="center" color="#053F5C">
              waiting for response , can check in email and message, please
              recheck junk email.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
