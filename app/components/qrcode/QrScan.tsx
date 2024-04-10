import React from "react";
import { StyleSheet } from "react-native";
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrScan: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const styled = useStyled();
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
              <Button
                px={20}
                onPress={onClose}
                backgroundColor="$gray0"
              >
                <X
                  size={30}
                  strokeWidth={2}
                  color={styled.config.tokens.colors.neutral9}
                />
              </Button>
            </HStack>
          </VStack>
        </ModalHeader>

        <ModalBody>
          <Text>
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
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
