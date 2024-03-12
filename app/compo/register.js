import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import icons from "../../config/icons";
import loginimage from "../../assets/loginimage.png";
import { COLORS } from "../../config/color";
import { useNavigation } from "@react-navigation/native";
import {
  GluestackUIProvider,
  Button,
  ButtonText,
  VStack,
  Input,
  InputField,
  HStack,
  ButtonIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  AlertCircleIcon,
  ChevronDownIcon,
  CheckIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const Register = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [selectedGender, setSelectedGender] = useState("");
  const handleLogin = () => {
    // Call onSubmit function with username and password
    onSubmit(username, password);
  };

  const handleRegisterClick = () => {
    // Navigate to the Register page when the text is clicked
    navigation.navigate("register"); // Replace "Register" with the name of your register page
  };

  return (
    <GluestackUIProvider config={config}>
      <View>
        <VStack>
          <HStack space="md" py="$2" style={styles.container}>
            <Image source={icons.reject} style={{ width: 20, height: 20 }} />
            <HStack>
              <Image source={icons.info} style={{ width: 20, height: 20 }} />
              <Text style={styles.description}> English</Text>
            </HStack>
          </HStack>
          <VStack>
            <View style={styles.text}>
              <View style={styles.header}>
                <Text style={styles.title}>Create new account</Text>
                <Text style={styles.description}>
                  create new account,you can update them after{" "}
                </Text>
              </View>
            </View>
          </VStack>
          <VStack space="md" py="$2">
            <Input borderColor={COLORS.neutral9}>
              <InputField
                py="$2"
                placeholder="Mobile number"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Input borderColor={COLORS.neutral9}>
              <InputField
                py="$2"
                placeholder="Email"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Input borderColor={COLORS.neutral9}>
              <InputField
                py="$2"
                placeholder="First Name"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Input borderColor={COLORS.neutral9}>
              <InputField
                py="$2"
                placeholder="Last Name"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Select style={{ color: COLORS.neutral7 }}>
              <SelectTrigger
                borderColor={COLORS.neutral9}
                style={{ color: COLORS.neutral7 }}
              >
                <SelectInput
                  py="$2"
                  placeholder="Gender"
                  placeholderTextColor={COLORS.neutral7}
                />
              </SelectTrigger>
              <SelectPortal style={{ color: COLORS.neutral7 }}>
                <SelectContent>
                  <SelectItem
                    label="Male"
                    value="Male"
                    style={{ color: COLORS.neutral7 }}
                  />
                  <SelectItem
                    label="Female"
                    value="Female"
                    style={{ color: COLORS.neutral7 }}
                  />
                  <SelectItem
                    label="LGBTQ+"
                    value="LGBTQ+"
                    style={{ color: COLORS.neutral7 }}
                  />
                </SelectContent>
              </SelectPortal>
            </Select>
            <Text style={styles.text}>Date of birth </Text>
            <HStack space="md" py="$2">
                
            </HStack>
            <Checkbox style={styles.description}>
                <CheckboxIndicator mr="$2" style={styles.description}>
                    <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel style={styles.description}>you accept our privacy and detail in our application</CheckboxLabel>
            </Checkbox>
            <Button size="md" bg="#D05F00">
              <ButtonText>Create new account now</ButtonText>
            </Button>


          </VStack>
        </VStack>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    alignItems: "left",
    color: COLORS.neutral7,
    fontWeight: "bold",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary6,
  },
  description: {
    fontSize: 16,
    color: COLORS.primary7, // Light text
  },
});

export default Register;
