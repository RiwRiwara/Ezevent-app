import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import icons from "../../config/icons";
import loginimage from "../../assets/loginimage.png";
import { COLORS } from "../../config/color";
import {
  GluestackUIProvider,
  Button,
  ButtonText,
  VStack,
  Input,
  InputField,
  HStack,
  ButtonIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call onSubmit function with username and password
    onSubmit(username, password);
  };

  return (
    <GluestackUIProvider config={config}>
      <View>
        <VStack>
          <HStack space="md" py="$2" style={styles.container}>
            <HStack>
              <Image source={icons.info} style={{ width: 20, height: 20 }} />
              <Text style={styles.description}> English</Text>
            </HStack>
            <Image source={icons.reject} style={{ width: 20, height: 20 }} />
          </HStack>
          <VStack>
            <View style={styles.imageContainer}>
              <Image source={loginimage} style={styles.image} />
            </View>
            <View style={styles.text}>
              <View style={styles.header}>
                <Text style={styles.description}>Welcome to </Text>
                <Text style={styles.title}>Ezevent</Text>
                <Text style={styles.description}>
                  Application for explore events and manage event{" "}
                </Text>
                <Text style={styles.description}>
                  {" "}
                  if you need to join please enter mobile number.
                </Text>
              </View>
            </View>
          </VStack>
          <VStack space="md" py="$2">
            <Input borderColor= {COLORS.neutral9}>
              <InputField
                style={styles.input}
                py="$2"
                placeholder="Email"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Input borderColor= {COLORS.neutral9}>
              <InputField
                style={styles.input}
                py="$2"
                placeholder="Password"
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Button size="sm" bg="#D05F00">
              <ButtonText>Login</ButtonText>
            </Button>
            <Text style={styles.description}>
              Don't have an account? register
            </Text>
          </VStack>
        </VStack>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Keep this for horizontal arrangement
    justifyContent: "space-between", // Align icons to opposite sides
  },
  text: {
    alignItems: "left",
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
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10, // Rounded corners
  },
});

export default Login;
