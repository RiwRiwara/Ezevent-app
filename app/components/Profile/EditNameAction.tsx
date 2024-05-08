import React, { useState, useEffect } from "react";
import {
  useStyled,
  VStack,
  HStack,
  View,
  Button,
  ButtonText,
  Text,
  Input,
  InputField,
  FormControl,
  ActionsheetItem,
  ActionsheetItemText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetFlatList,
  ActionsheetIcon,
  Image,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  InputIcon,
  LeadingIcon,
  ButtonIcon,
  ButtonTextIcon,
  ButtonTextIconIcon,
} from "@gluestack-ui/themed";
import { Ellipsis } from "lucide-react-native";
import { CustomTextInput } from "@components/forms/CustomInput";

function EditNameAction() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  
  const handleFirstNameChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Button px={9} onPress={handleClose} backgroundColor="$gray0">
        <Text fontSize="$paragraph" color="$primary5">
          Edit
        </Text>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <FormControl mt={5} mb={20} px={10}>
            <FormControlLabel>
              <FormControlLabelText>First Name</FormControlLabelText>
            </FormControlLabel>


   
            <Button onPress={handleClose} mt={20}>
              <ButtonText>Pay $1000</ButtonText>
            </Button>
          </FormControl>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default EditNameAction;
