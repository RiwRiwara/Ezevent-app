import React from "react";
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

interface ActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchFilter: React.FC<ActionsheetProps> = ({ isOpen, onClose }) => {
  return (
    <Actionsheet
      isOpen={isOpen} 
      onClose={onClose}
      snapPoints={[85]}
    >
      <KeyboardAvoidingView
        behavior="position"
        style={{
          position: "relative",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent maxHeight="85%">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack w="$full" p={20}>
            <HStack
              justifyContent="center"
              alignItems="center"
              space="md"
            ></HStack>
            <FormControl mt={1}>
              <FormControlLabel>
                <FormControlLabelText>Find What You Need</FormControlLabelText>
              </FormControlLabel>
              <HStack
                justifyContent="space-between"
                alignItems="center"
                space="md"
              >
                <Input w="$5/6">
                  <InputField placeholder="Enter Keyboard" />
                </Input>
                <Button
                  w="$1/6"
                  backgroundColor="$neutral6"
                  onPress={onClose}
                >
                  <ButtonText>Find</ButtonText>
                </Button>
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
                <HStack space="sm" mt={10}>
                  <Button w="$30%" variant="search" action="search">
                    <ButtonText>Entertainment</ButtonText>
                  </Button>
                  <Button w="$40%" variant="search" action="search">
                    <ButtonText>Finance&Accounting</ButtonText>
                  </Button>
                  <Button w="$30%" variant="search" action="search">
                    <ButtonText>Seminar</ButtonText>
                  </Button>
                </HStack>
                <HStack space="sm" mt={10}>
                  <Button w="$16%" variant="search" action="search">
                    <ButtonText>Funny</ButtonText>
                  </Button>
                  <Button w="$26%" variant="search" action="search">
                    <ButtonText>Art&Design</ButtonText>
                  </Button>
                  <Button w="$18%" variant="search" action="search">
                    <ButtonText>Charity</ButtonText>
                  </Button>
                  <Button w="$40%" variant="search" action="search">
                    <ButtonText>Game&E-sports</ButtonText>
                  </Button>
                </HStack>
                <HStack space="sm" mt={10}>
                  <Button w="$23%" variant="search" action="search">
                    <ButtonText>Technology</ButtonText>
                  </Button>
                  <Button w="$22%" variant="search" action="search">
                    <ButtonText>Exhibition</ButtonText>
                  </Button>
                  <Button w="$20%" variant="search" action="search">
                    <ButtonText>Education</ButtonText>
                  </Button>
                  <Button w="$15%" variant="search" action="search">
                    <ButtonText>Other</ButtonText>
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
  );
};

export default SearchFilter;
