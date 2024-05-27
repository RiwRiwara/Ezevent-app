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
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { Camera, CameraType, FlashMode } from 'expo-camera/legacy';
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrScan: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const styled = useStyled();

  const toggleFlash = () => {
    setFlashMode(
      flashMode === FlashMode.off
        ? FlashMode.on
        : FlashMode.off
    );
  };

  if (!permission) {
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        w={400}
        alignItems="center"
      >
        <ModalContent backgroundColor="$gray0">
          <ModalHeader>
            <HStack alignItems="center" flex={1} justifyContent="space-between">
            <Button px={20} onPress={toggleFlash} backgroundColor="$gray0">
                <Zap
                  size={30}
                  strokeWidth={2}
                  color={
                    flashMode === FlashMode.off
                      ? styled.config.tokens.colors.neutral9
                      : styled.config.tokens.colors.primary7
                  }
                />
              </Button>
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
          </ModalHeader>

          <ModalBody>
            <View style={styles.container}>
              <Camera
                style={styles.camera}
                type={type}
                autoFocus={Platform.OS === "ios" ? "on" : "off"}
                flashMode={flashMode}
              >
                <View style={styles.buttonContainer}>
    
                </View>
              </Camera>
            </View>
          </ModalBody>

          <ModalFooter>
            <HStack space="lg" alignItems="center">
              <ImagePlus
                size={30}
                strokeWidth={2}
                color={styled.config.tokens.colors.neutral9}
              />
              <Input w="$55%">
                <InputField color="$neutral9" placeholder="Enter Code ..." />
              </Input>
              <Button bg="$success7" onPress={onClose}>
                <ButtonText>OK</ButtonText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default QrScan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: 350,
    height: 400,
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
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
