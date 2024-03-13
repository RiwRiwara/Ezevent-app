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
import { useTranslation } from "react-i18next";

function Save_complete() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const { t } = useTranslation();

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
                {t('save_complete')}              
                </Heading>
            </VStack>
          </AlertDialogHeader>
          <AlertDialogBody w={350}>
            <Text size="sm" textAlign="center" color="#053F5C">
              {t('save_text')}
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
              <ButtonText>{t('okay')}</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </GluestackUIProvider>
  );
}

export default Save_complete;
