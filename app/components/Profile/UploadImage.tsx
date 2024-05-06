import React from "react";
import { X } from "lucide-react-native";
import {
  useStyled,
  VStack,
  HStack,
  View,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
  Input,
  InputField,
  FormControl,
} from "@gluestack-ui/themed";
import { useState } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
import ImagePickerExample from "@utils/ImagePicker";

const UploadImage: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent backgroundColor="$gray0">
        <FormControl
          p="$4"
          borderWidth="$1"
          borderRadius="$lg"
          borderColor="$borderLight300"
          $dark-borderWidth="$1"
          $dark-borderRadius="$lg"
          $dark-borderColor="$borderDark800"
        >
          <VStack space="lg">
            <HStack justifyContent="space-between">
              <Text
                px={1}
                py={2}
                fontSize="$title_4"
                fontWeight="$bold"
                color="$neutral9"
              >
                Upload Image
              </Text>
              <Button px={2} onPress={onClose} backgroundColor="$gray0">
                <X size={30} strokeWidth={2} />
              </Button>
            </HStack>
            <View>
              <ImagePickerExample />
            </View>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
};

export default UploadImage;
