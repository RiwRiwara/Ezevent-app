import React, { useState, useEffect } from "react";
import { Platform, Modal, TouchableWithoutFeedback } from "react-native";
import {
  Button,
  ButtonText,
  Text,
  ImageBackground,
  View,
  Link,
  HStack,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { Minimize2, ChevronLeft } from "lucide-react-native";
import CreateAccountForm from "@components/auth/CreateAccountForm";
import SigninWithEmailForm from "@components/auth/SigninWithEmailForm";

export const SigninSlideUp = ({ isPreSigninVisible, toggleModal }) => {
  const [formType, setFormType] = useState(null);

  const renderForm = () => {
    switch (formType) {
      case "createAccount":
        return <CreateAccountForm setFormType={setFormType} handleCloseModal={toggleModal}/>;
      case "signinWithEmail":
        return <SigninWithEmailForm setFormType={setFormType} handleCloseModal={toggleModal} />;
      default:
        return (
          <ImageBackground
            source={require("../../../assets/images/loginimage.png")}
            alt="Background Image"
            style={{
              minHeight: "90%",
              shadowColor: "#000",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowOffset: {
                width: 0,
                height: -3,
              },
              shadowOpacity: 0.25,
              backgroundColor: "#053F5C",
            }}
            imageStyle={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: Platform.OS != "web" ? 0 : 50,
              minHeight: Platform.OS != "web" ? "90%" : "60%",
              minWidth: "100%",
              resizeMode: Platform.OS != "web" ? "cover" : "contain",
            }}
          >
            <HStack
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Link
                onPress={toggleModal}
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
                <Minimize2 color="#fff" strokeWidth={3} />
              </Link>
            </HStack>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 0,
              }}
            >
              <View alignItems="center" pb={50} pt={50}>
                <Button width={300} onPress={() => setFormType("signinWithEmail")}>
                  <ButtonText>SignIn with email</ButtonText>
                </Button>

                <Button mt={25} width={300} action="negative">
                  <ButtonText>SignIn with Google</ButtonText>
                </Button>

                <Link onPress={() => setFormType("createAccount")}>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text color="$textLight0">Don't have an account? </Text>
                    <Text color="$primary5" fontWeight="$bold">
                      Register Now
                    </Text>
                  </View>
                </Link>
              </View>
            </View>
          </ImageBackground>
        );
    }
  };
  return (
    <Modal
      visible={isPreSigninVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>
        {renderForm()}
      </View>
    </Modal>
  );
};
