import React, { useState } from "react";
import { Pressable, Keyboard } from "react-native";
import {
  useStyled,
  VStack,
  HStack,
  View,
  ScrollView,
  Text,
  Button,
  ButtonText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  KeyboardAvoidingView,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputSlot,
  InputIcon,
  InputField,
  Box,
} from "@gluestack-ui/themed";
import { useNavigation, Link } from "expo-router";

interface ActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchFilter: React.FC<ActionsheetProps> = ({ isOpen, onClose }) => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  const handleCategory = (category: string) => {
    setCategories(category);
  };

  const handleDuty = (duty: string) => {
    setDuty(duty);
  };

  const handleBadge = (badge: string) => {
    setBadge(badge);
  };

  const handleDay = (day: string) => {
    setDay(day);
  };

  const [eventName, setEventName] = useState("");
  const [categories, setCategories] = useState("");
  const [duty, setDuty] = useState("");
  const navigation = useNavigation();

  const handleFindEvent = async () => {
    navigation.navigate("explore/search_result", { 
      name: eventName,
      categories: categories,
     });
    setEventName("");
    setCategories("");
    onClose();
  };

  return (
    <Pressable onPress={handlePressOutside}>
      <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={[85]}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={-250}
          style={{
            flex: 1,
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="85%">
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <VStack w="$full" py={20} px={10}>
              <HStack
                justifyContent="center"
                alignItems="center"
                space="md"
              ></HStack>
              <FormControl mt={1}>
                <FormControlLabel>
                  <FormControlLabelText
                    fontSize="$paragraph"
                    fontWeight="$bold"
                    color="$neutral9"
                  >
                    Find What You Need
                  </FormControlLabelText>
                </FormControlLabel>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  space="md"
                >
                  <Input w="80%">
                    <InputField
                      placeholder="Event Name"
                      value={eventName}
                      onChangeText={(text) => setEventName(text)}
                    />
                  </Input>
                  <Link
                    style={{
                      width: '20%',
                      backgroundColor: "#4DA9D9",
                      color: "white",
                      textAlign: 'center',
                      padding: 12,
                      textDecorationLine: 'none',
                      borderRadius: 5,
                      display: 'inline-block',
                      fontSize: 16,
                    }}
                    href={{
                      pathname: "explore/search_result",
                      params: { name: eventName, categories: categories}
                    }} push>
                      Find
                    </Link>
                </HStack>
                <VStack bg="$gray0" w="$full" mt={10}>
                  <Box bg="$secondary1" w="$full">
                    <Text
                      fontSize="$paragraph"
                      fontWeight="$bold"
                      color="$neutral9"
                    >
                      Activity Type
                    </Text>
                  </Box>
                  <HStack space="xs" mt={10}>
                    <Button w="30%" variant="search" action="search"
                      onPress={() => handleCategory("1")}
                    >
                      <ButtonText fontSize={10}>Entertainment</ButtonText>
                    </Button>
                    <Button w="40%" variant="search" action="search"
                      onPress={() => handleCategory("2")}
                    >
                      <ButtonText fontSize={10}>Education</ButtonText>
                    </Button>
                    <Button w="30%" variant="search" action="search"
                      onPress={() => handleCategory("3")}
                    >
                      <ButtonText fontSize={10}>Charity</ButtonText>
                    </Button>
                  </HStack>
                  <HStack space="xs" mt={10}>
                    <Button w="20%" variant="search" action="search"
                      onPress={() => handleCategory("4")}
                    >
                      <ButtonText fontSize={10}>Seminar</ButtonText>
                    </Button>
                    <Button w="30%" variant="search" action="search"
                      onPress={() => handleCategory("5")}
                    >
                      <ButtonText fontSize={10}>Workshop</ButtonText>
                    </Button>
                    <Button w="20%" variant="search" action="search"
                      onPress={() => handleCategory("6")}
                    >
                      <ButtonText fontSize={10}>Conference</ButtonText>
                    </Button>
                    <Button w="30%" variant="search" action="search"
                      onPress={() => handleCategory("7")}
                    >
                      <ButtonText fontSize={10}>Game</ButtonText>
                    </Button>
                  </HStack>
                  <HStack space="xs" mt={10}>
                    <Button w="$1/4" variant="search" action="search"
                      onPress={() => handleCategory("8")}
                    >
                      <ButtonText fontSize={10}>Exhibition</ButtonText>
                    </Button>
                    <Button w="$1/4" variant="search" action="search"
                      onPress={() => handleCategory("9")}
                    >
                      <ButtonText fontSize={10}>Art</ButtonText>
                    </Button>
                    <Button w="$1/4" variant="search" action="search"
                      onPress={() => handleCategory("10")}
                    >
                      <ButtonText fontSize={10}>Music</ButtonText>
                    </Button>
                    <Button w="$1/4" variant="search" action="search">
                      <ButtonText fontSize={10}>Sport</ButtonText>
                    </Button>
                  </HStack>
                  <Box bg="$secondary1" w="$full">
                    <Text
                      fontSize="$paragraph"
                      fontWeight="$bold"
                      color="$neutral9"
                    >
                      Duty Type
                    </Text>
                  </Box>
                  <HStack space="sm" mt={10}>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Staff</ButtonText>
                    </Button>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Participant</ButtonText>
                    </Button>
                  </HStack>
                  <Box bg="$secondary1" w="$full">
                    <Text
                      fontSize="$paragraph"
                      fontWeight="$bold"
                      color="$neutral9"
                    >
                      Filter by day
                    </Text>
                  </Box>
                  <HStack space="sm" mt={10}>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Today</ButtonText>
                    </Button>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Tomorrow</ButtonText>
                    </Button>
                  </HStack>
                  <HStack space="sm" mt={10}>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>This Week</ButtonText>
                    </Button>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>This Month</ButtonText>
                    </Button>
                  </HStack>
                  <Box bg="$secondary1" w="$full">
                    <Text
                      fontSize="$paragraph"
                      fontWeight="$bold"
                      color="$neutral9"
                    >
                      Filter by badges
                    </Text>
                  </Box>
                  <HStack space="sm" mt={10}>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Communication</ButtonText>
                    </Button>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Problem-Solving</ButtonText>
                    </Button>
                  </HStack>
                  <HStack space="sm" mt={10}>
                    <Button w="$33.33%" variant="search" action="search">
                      <ButtonText>Learning</ButtonText>
                    </Button>
                    <Button w="$33.33%" variant="search" action="search">
                      <ButtonText>Teamwork </ButtonText>
                    </Button>
                    <Button w="$33.33%" variant="search" action="search">
                      <ButtonText>Thinking</ButtonText>
                    </Button>
                  </HStack>
                  <HStack space="sm" mt={10}>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Professional</ButtonText>
                    </Button>
                    <Button w="$50%" variant="search" action="search">
                      <ButtonText>Knowledge</ButtonText>
                    </Button>
                  </HStack>
                </VStack>
              </FormControl>
            </VStack>
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </Pressable>
  );
};

export default SearchFilter;
