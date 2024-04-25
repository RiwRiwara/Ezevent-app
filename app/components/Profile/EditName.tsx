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
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditName: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const styled = useStyled();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent backgroundColor="$gray0">
        <ModalHeader>
          <HStack alignItems="center" flex={1} justifyContent="space-between">
            <Text
              px={12}
              fontSize="$title_4"
              fontWeight="$bold"
              color="$neutral9"
            >
              Edit Name
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
          <HStack justifyContent="center" alignItems="center">
            <VStack>
              <HStack>
                <Text
                  px={20}
                  py={10}
                  fontSize="$md"
                  fontWeight="$bold"
                  color="$neutral9"
                >
                  First Name
                </Text>
                <Input>
                  <InputField color="$neutral9" placeholder="Enter Code ..." />
                </Input>
              </HStack>
              <HStack>
                <Text
                  px={21}
                  py={10}
                  fontSize="$md"
                  fontWeight="$bold"
                  color="$neutral9"
                >
                  Last Name
                </Text>
                <Input>
                  <InputField color="$neutral9" placeholder="Enter Code ..." />
                </Input>
              </HStack>
            </VStack>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <HStack justifyContent="center" alignItems="center">
            <VStack>
              <Button bg="$success7" onPress={onClose}>
                <ButtonText>OK</ButtonText>
              </Button>
            </VStack>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditName;
