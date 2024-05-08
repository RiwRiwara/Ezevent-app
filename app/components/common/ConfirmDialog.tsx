import React, { useState, useEffect } from "react";
import {
  useStyled,
  Box,
  VStack,
  HStack,
  View,
  Button,
  ButtonText,
  Text,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Heading,
  Icon,
  CloseIcon,
  ButtonGroup,
} from "@gluestack-ui/themed";

function ConfirmDialog({
  showAlertDialog,
  setShowAlertDialog,
  dialogData = {
    title: "Confirm",
    message:
      "Are you sure you want to deactivate your account? Your data will be permanently removed and cannot be undone.",
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
  },
  functionToCall,
  params = {},
}) {
  const handleConfirm = () => {
    functionToCall(true, params);
  };

  return (
    <AlertDialog
      isOpen={showAlertDialog}
      onClose={() => {
        setShowAlertDialog(false);
      }}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">{dialogData.title || "Are you sure?"}</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">
            {dialogData.message ||
              "Are you sure you want to deactivate your account? Your data will be permanently removed and cannot be undone."}
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>{dialogData.cancelButtonText || "Cancel"}</ButtonText>
            </Button>
            <Button
              bg="$error600"
              action="negative"
              onPress={handleConfirm}
            >
              <ButtonText>
                {dialogData.confirmButtonText || "Confirm"}
              </ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmDialog;
