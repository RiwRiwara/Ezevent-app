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
import { useHandleSignInByApi } from "@services/auth/SignIn";

const SigninWithEmailForm = ({ setFormType, handleCloseModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = useHandleSignInByApi();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignInAction = async () => {
    try {
      setIsLoading(true);
      await handleSignIn(email, password, handleCloseModal);
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
        marginTop: 100,

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
  );
};

export default SigninWithEmailForm;
