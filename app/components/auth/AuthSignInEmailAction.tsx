import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Input,
  InputField,
  FormControl,
  ActionsheetFlatList,
  ActionsheetIcon,
  useStyled,
  Box,
  VStack,
  HStack,
  View,
  Button,
  ButtonText,
  Text,
  ActionsheetItem,
  ActionsheetItemText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  Divider,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
} from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { useHandleSignInByApi } from "@services/auth/SignIn";
// import { useHandleSignInService } from "@services/auth/SignInService";

import { ChevronLeft } from "lucide-react-native";
import { CustomTextInput } from "@components/forms/CustomInput";
import { useStorageState } from "@providers/useStorageState";

function AuthSignInEmailAction() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ session, setSession] = useStorageState("session");

  const handleSignInService = useHandleSignInByApi();

  const handleSaveToken = () => {
  };

  const handleClose = () => {
    setShowActionsheet(!showActionsheet);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignInAction = async () => {
    try {
      setIsLoading(true);
      await handleSignInService(email, password, handleSaveToken);
      router.replace("/explore");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button width={300} onPress={handleClose}>
        <ButtonText color="$gray0">SignIn with email</ButtonText>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent p={0}>
          <ActionsheetDragIndicatorWrapper mt={10}>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <View bg="$gray0" h="75%" w="100%">
            <View py={10} px={20}>
              <Text fontSize={30} fontWeight="$bold" color="$primary6">
                Sign In
              </Text>
              <Text color="$primary7">
                Sign in to your account to continue using the app.
              </Text>
            </View>

            <Box px={20}>
              {error && (
                <Alert action="error" variant="accent" my={5}>
                  <AlertIcon as={InfoIcon} mr="$3" />
                  <AlertText>{error}</AlertText>
                </Alert>
              )}

              <FormControl
                size="md"
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
                isDisabled={isLoading}
              >
                {/* Email */}
                <Box mb={15}>
                  <CustomTextInput
                    label="Email"
                    placeholder="email"
                    errorMessage="Please enter a valid email."
                    type="text"
                    onInputChange={handleEmailChange}
                  />
                </Box>

                {/* Password */}
                <Box mb={15}>
                  <CustomTextInput
                    label="Password"
                    placeholder="password"
                    errorMessage="Please enter a valid password."
                    type="password"
                    onInputChange={handlePasswordChange}
                  />
                </Box>

                <Divider />
                <Box mb={15} mt={20}>
                  <Button
                    w="100%"
                    onPress={handleSignInAction}
                    isDisabled={isLoading}
                  >
                    <ButtonText>Sign In</ButtonText>
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </View>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default AuthSignInEmailAction;
