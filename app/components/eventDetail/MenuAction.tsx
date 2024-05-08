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
import { Ellipsis } from "lucide-react-native";

function MenuAction() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <>
      <Button backgroundColor="$neutral6" onPress={handleClose} w={10}>
        <Ellipsis size={35} absoluteStrokeWidth strokeWidth={3} color="#ffffff" />
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

            <Text fontSize="$md" fontWeight="$bold" color="$primary5">
              MenuAction
            </Text>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default MenuAction;
