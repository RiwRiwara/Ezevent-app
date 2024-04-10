import React from "react";
import { ImagePlus, Zap, X, Box } from "lucide-react-native";
import {
  useStyled,
  VStack,
  HStack,
  View,
  ScrollView,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Icon,
  CloseIcon,
  Text,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrScan: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const styled = useStyled();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBackdrop />
        <ModalContent backgroundColor="$gray0">
          <ModalHeader></ModalHeader>
          <ModalBody>
            <VStack space="lg" w="$full">
              <Button w="$25%" bg="$success7" onPress={requestPermission}>
                <ButtonText>grant permission</ButtonText>
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent backgroundColor="$gray0">
        <ModalHeader>
          <VStack space="lg" w="$full">
            <HStack space="lg" alignItems="center">
              <Zap
                size={30}
                strokeWidth={2}
                color={styled.config.tokens.colors.neutral9}
              />
              <Text
                px={12}
                fontSize="$title_4"
                fontWeight="$bold"
                color="$neutral9"
              >
                Scan QR-Code
              </Text>
              <Button px={20} onPress={onClose} backgroundColor="$gray0">
                <X
                  size={30}
                  strokeWidth={2}
                  color={styled.config.tokens.colors.neutral9}
                />
              </Button>
            </HStack>
          </VStack>
        </ModalHeader>

        <ModalBody h={300}>
          <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
              <View style={styles.buttonContainer}></View>
            </Camera>
          </View>
        </ModalBody>
        <ModalFooter borderTopWidth="$0">
          <VStack space="lg" w="$full">
            <HStack space="lg" alignItems="center">
              <ImagePlus
                size={30}
                strokeWidth={2}
                color={styled.config.tokens.colors.neutral9}
              />
              <Input w="$55%">
                <InputField color="$neutral9" placeholder="Enter Code ..." />
              </Input>
              <Button w="$25%" bg="$success7" onPress={onClose}>
                <ButtonText>OK</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QrScan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    Height: 400,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
