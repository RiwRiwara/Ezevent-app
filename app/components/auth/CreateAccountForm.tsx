import {
  Button,
  ButtonText,
  Text,
  View,
  Link,
  HStack,
  Box,
  FormControl,
  Divider,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
} from "@gluestack-ui/themed";
import { ChevronLeft } from "lucide-react-native";
import { CustomTextInput } from "@components/forms/CustomInput";
import { useState } from "react";
import { useHandleSignUpByApi } from "@services/auth/SignUp";

const CreateAccountForm = ({ setFormType, handleCloseModal }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = useHandleSignUpByApi();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleSignUpAction = async () => {
    try {
      setIsLoading(true);

      const userData = {
        email: email,
        mobile_number: phoneNumber,
        password: password,
        password_confirmation: confirmPassword,

      };

      await handleSignup(userData, handleCloseModal);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      bg="$gray0"
      style={{
        minHeight: "90%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.25,
      }}
    >
      <HStack
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Link
          onPress={() => setFormType(null)}
          bg="$primary4"
          p={8}
          m={15}
          borderRadius={25}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <ChevronLeft size={28} color="#fff" strokeWidth={3} />
        </Link>
      </HStack>

      <View py={10} px={20}>
        <Text fontSize={30} fontWeight="$bold" color="$primary6">
          Create new account
        </Text>
        <Text color="$primary7">
          create new account, you can update them after
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

          {/* Phone number */}
          <Box mb={15}>
            <CustomTextInput
              label="Phone number"
              placeholder="phone number"
              errorMessage="Please enter a valid phone number."
              type="text"
              onInputChange={handlePhoneNumberChange}
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

          {/* Confirm */}
          <Box mb={15}>
            <CustomTextInput
              label="Confirm Password"
              placeholder="password"
              errorMessage="Please enter a valid password."
              type="password"
              onInputChange={handleConfirmPasswordChange}
            />
          </Box>

          <Divider />
          <Box mb={15} mt={20}>
            <Button
              w="100%"
              onPress={handleSignUpAction}
              isDisabled={isLoading}
            >
              <ButtonText>Create Account</ButtonText>
            </Button>
          </Box>
        </FormControl>
      </Box>
    </View>
  );
};

export default CreateAccountForm;
