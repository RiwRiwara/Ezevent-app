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
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useTranslation } from "react-i18next";

const Login = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <HStack>
              <Image source={icons.info} style={{ width: 20, height: 20 }} />
              <Text style={styles.description}>{t('language')}</Text>
            </HStack>
            <Image source={icons.reject} style={{ width: 20, height: 20 }} />
          </HStack>
          <VStack>
            <View style={styles.imageContainer}>
              <Image source={loginimage} style={styles.image} />
            </View>
            <View style={styles.text}>
              <View style={styles.header}>
                <Text style={styles.description}>{t('login1')}</Text>
                <Text style={styles.title}>Ezevent</Text>
                <Text style={styles.description}>
                  {t('login2')}{" "}
                </Text>
                <Text style={styles.description}>
                  {/* {" "} */}
                  {t('login3')}
                </Text>
              </View>
            </View>
          </VStack>
          <VStack space="md" py="$2">
            <Input borderColor={COLORS.neutral9}>
              <InputField
                style={styles.input}
                py="$2"
                placeholder={t('email')}
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Input borderColor={COLORS.neutral9}>
              <InputField
                style={styles.input}
                py="$2"
                placeholder={t('password')}
                placeholderTextColor={COLORS.neutral7}
              />
            </Input>
            <Button size="sm" bg="#D05F00">
              <ButtonText>{t('loginbtn')}</ButtonText>
            </Button>
            <Text style={styles.description}>
              {t('login4')} {t('register')}
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
    width: 400,
    height: 350,
    borderRadius: 10, // Rounded corners
  },
});

export default Login;
