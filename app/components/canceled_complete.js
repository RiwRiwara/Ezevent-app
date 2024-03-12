import { config } from "@gluestack-ui/config";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  Center,
  Button,
  ButtonText,
  Icon,
  VStack,
  Heading,
  Text,
  CheckCircleIcon,
  GluestackUIProvider,
} from "@gluestack-ui/themed";
import React from "react";

function Canceled_complete() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  return (
    <GluestackUIProvider config={config}>
      <Center h={300}>
        <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </Center>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent alignItems="center">
          <AlertDialogHeader borderBottomWidth="$0">
            <VStack space="sm" alignItems="center">
              <Icon
                as={CheckCircleIcon}
                color="$success700"
                $dark-color="$success300"
                w={100}
                h={100}
              />

              <Heading size="lg" color="#053F5C">
                Canceled Complete!
              </Heading>
            </VStack>
          </AlertDialogHeader>
          <AlertDialogBody w={350}>
            <Text size="sm" textAlign="center" color="#053F5C">
              waiting for response , can check in email and message, please
              recheck junk email.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Okay</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </GluestackUIProvider>
  );
}

export default Canceled_complete;
