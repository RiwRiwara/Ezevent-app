import React, { useState, useEffect } from "react";
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
} from "@gluestack-ui/themed";
import { Bell } from "lucide-react-native";

function NotiAction() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <>
      <Button w="$fit" backgroundColor="$neutral6" onPress={handleClose} w={10}>
        <Bell size={35} absoluteStrokeWidth strokeWidth={3} color="#ffffff" />
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

            <Text fontSize="$md" fontWeight="$bold" color="$primary5">
              Notification
            </Text>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default NotiAction;
