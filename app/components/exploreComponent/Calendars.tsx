import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet } from "react-native";
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
LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  today: "Today",
};

LocaleConfig.defaultLocale = "en";

const Calendars: React.FC<ActionsheetProps> = ({ isOpen, onClose }) => {
  const styled = useStyled();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={[45]} >
      <KeyboardAvoidingView
        behavior="position"
        style={{
          position: "relative",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent maxHeight="45%">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack w="$full" p={0}>
            <Calendar
              style={{
                height: 500,
              }}
              theme={{
                monthTextColor: "#783C00",
                arrowColor: "#783C00",
                textMonthFontSize: 24,
                textMonthFontWeight: "bold",
                textSectionTitleColor: "#416D76",
                textDayHeaderFontSize: 20,
                textDayHeaderFontWeight: "bold",
                selectedDayBackgroundColor: "#ADE4FF",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#00adf5",
                textDayFontSize: 18,
                dayTextColor: "#4C4C4C",
                textDayFontWeight: "bold",
                textDisabledColor: "#898989",
              }}
              markedDates={{
                '2024-04-07': { selected: true, selectedColor: '#ADE4FF', selectedTextColor: '#4C4C4C'},
                '2024-04-10': { selected: true, selectedColor: '#ADE4FF', selectedTextColor: '#4C4C4C'},
                '2024-04-13': { selected: true, selectedColor: '#ADE4FF', selectedTextColor: '#4C4C4C'},
                '2024-04-14': { selected: true, selectedColor: '#ADE4FF', selectedTextColor: '#4C4C4C'},
                '2024-04-15': { selected: true, selectedColor: '#ADE4FF', selectedTextColor: '#4C4C4C'},
              }}
            />
          </VStack>
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
};

export default Calendars;
