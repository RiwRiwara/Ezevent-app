import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Link,
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
} from "@gluestack-ui/themed";
import AuthSignInEmailAction from "@components/auth/AuthSignInEmailAction";

function AuthAction() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button backgroundColor="$gray0" w="100%" onPress={handleClose}>
        <ButtonText fontSize="$lg" fontWeight="$bold" color="$primary5">
          Join Now!
        </ButtonText>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent p={0}>
          <ImageBackground
            h="85%"
            w="100%"
            source={require("@assets/images/loginimage.png")}
            alt="Background Image"
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            imageStyle={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: "130%",
            }}
          >
            <ActionsheetDragIndicatorWrapper mt={10}>
              <ActionsheetDragIndicator backgroundColor="$gray0" />
            </ActionsheetDragIndicatorWrapper>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: -80,
              }}
            >
              <View alignItems="center">
                <AuthSignInEmailAction destination="/explore" />

                <Button mt={25} width={300} action="negative">
                  <ButtonText>SignIn with Google</ButtonText>
                </Button>

                <Link onPress={() => {}}>
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
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default AuthAction;
