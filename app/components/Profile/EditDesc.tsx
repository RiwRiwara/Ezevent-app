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
import { useSession } from "@providers/ctx";
import { UpdateProfile } from "@services/api/user/ApiUpdateProfile";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditDesc: React.FC<ModalProps & { description?: string }> = ({ isOpen, onClose, description }) => {
  const { user,session } = useSession();
  const styled = useStyled();
  const [Description, setDescription] = useState(description || "");

  const updateOnClicked = () => {
    UpdateProfile(session,"personality", Description)
      .then((data) => {
        onClose();
      })
      .catch((error) => {
        console.log("Error updating Description:", error);
      })
      .finally(() => {
      });
  };
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
                Edit Description
              </Text>
              <Button px={2} onPress={onClose} backgroundColor="$gray0">
                <X
                  size={30}
                  strokeWidth={2}
                  color={styled.config.tokens.colors.neutral9}
                />
              </Button>
            </HStack>
            <VStack space="xs">
              <Input>
                <InputField
                  type="text"
                  value={Description}
                  onChangeText={(text) => setDescription(text)}
                />
              </Input>
            </VStack>
            <Button ml="auto" onPress={updateOnClicked}>
              <ButtonText color="$gray0">Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
};

export default EditDesc;
