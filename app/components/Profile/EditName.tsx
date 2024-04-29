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
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditName: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { user } = useSession();
  const styled = useStyled();
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
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
                Edit Name
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
              <Text color="$neutral9" lineHeight="$xs">
                First Name
              </Text>
              <Input>
                <InputField
                  type="text"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text color="$neutral9" lineHeight="$xs">
                Last Name
              </Text>
              <Input>
                <InputField
                  type="text"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </Input>
            </VStack>
            <Button ml="auto" onPress={onClose}>
              <ButtonText color="$gray0">Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
};

export default EditName;
