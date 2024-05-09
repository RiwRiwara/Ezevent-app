import React, { useState, useEffect } from "react";
import {
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
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";
import { API_ENDPOINTS, getApiUrl } from "@constants/api/endpoints";
import { ApplyEvent } from "@services/api/event/ApplyEvent";
import ConfirmDialog from "@components/common/ConfirmDialog";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
class Event {
  event_id: string;
  event_name: string;
}

function ApplicationAction({ event }: { event: Event }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const [type, setType] = useState("Participant");
  const [loading, setLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [applyData, setApplyData] = useState({});

  useEffect(() => {
    setLoading(true);
    const checkIsJoined = async () => {
      const url = getApiUrl(API_ENDPOINTS.IS_JOINED).replace(
        "{event_id}",
        event.event_id
      );
      const token = await AsyncStorage.getItem("token");
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("[ApplicationAction] : User is joined:", response.data);
          setIsJoined(response.data.isAlreadyJoin);
          setApplyData(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(
            "[ApplicationAction] : Error checking if user is joined:",
            error.response.data.message
          );
        })
        .finally(() => {
          setLoading(false);
        });
    };
    checkIsJoined();
  }, [event.event_id]);

  const handleApply = (confirm) => {
    if (confirm) {
      setLoading(true);
      ApplyEvent(event.event_id, type)
        .then((data) => {
          console.log("[ApplicationAction]", data);
          setLoading(false);
          router.replace("(app)/myevent");
        })
        .catch((error) => {
          console.log(
            "[ApplicationAction] : Error applying for event:",
            error.response.data.message
          );
          setLoading(false);
        });
      setShowActionsheet(false);
    }
  };

  return (
    <>
      <Button backgroundColor="$gray0" w="100%" onPress={handleClose}>
        <ButtonText fontSize="$lg" fontWeight="$bold" color="$primary5">
          Join Now!
        </ButtonText>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <VStack pb={20}>
            <HStack justifyContent="space-around" w="$full" alignItems="center">
              <VStack
                justifyContent="center"
                alignItems="center"
                gap={10}
              >
                <Box
                  bg="$gray0"
                  w="$full"
                  alignItems="center"
                  p="$2"
                  style={
                    applyData?.type === "Participant"
                      ? {
                          backgroundColor: "#F0F0F0",
                          borderWidth: 1,
                          borderColor: "#E0E0E0",
                          borderRadius: 10,
                        }
                      : {}
                  }
                >
                  <Text fontSize={30} color="$neutral6" fontWeight="$bold">
                    Participants
                  </Text>
                  {/* <Text fontSize={20} color="$neutral7" fontWeight="$semibold">
                    {event.number_participant}/{event.limit_participant}
                  </Text> */}
                </Box>
                {isJoined ? (
                  <></>
                ) : (
                  <>
                    <Button
                      onPress={() => {
                        setType("Participant");
                        setShowConfirmDialog(true);
                      }}
                    >
                      <ButtonText fontWeight="$bold">Apply</ButtonText>
                    </Button>
                  </>
                )}
              </VStack>

              <VStack justifyContent="center" alignItems="center" gap={10}>
                <Box
                  bg="$gray0"
                  w="$full"
                  alignItems="center"
                  p="$2"
                  style={
                    applyData?.type === "Staff"
                      ? {
                          backgroundColor: "#F0F0F0",
                          borderWidth: 1,
                          borderColor: "#E0E0E0",
                          borderRadius: 10,
                        }
                      : {}
                  }
                >
                  <Text fontSize={30} color="$neutral6" fontWeight="$bold">
                    Staffs
                  </Text>
                  {/* <Text fontSize={20} color="$neutral7" fontWeight="$semibold">
                    {event.number_staff}/{event.limit_staff}
                  </Text> */}
                </Box>
                {isJoined ? (
                  <></>
                ) : (
                  <>
                    <Button
                      action="positive"
                      onPress={() => {
                        setType("Staff");
                        setShowConfirmDialog(true);
                      }}
                    >
                      <ButtonText fontWeight="$bold">Apply</ButtonText>
                    </Button>
                  </>
                )}
              </VStack>

            </HStack>

            <HStack w="100%" alignItems="center">
              {!isJoined ? (
                <>
                  <View w="$full" backgroundColor="$gray0"></View>
                </>
              ) : (
                <>
                  <Box w="$full" justifyContent="center" my={10}>
                    <Text
                      fontSize={15}
                      color="$neutral7"
                      fontWeight="$semibold"
                      textAlign="center"
                    >
                      {applyData.message} as {applyData.type}
                    </Text>
                  </Box>
                </>
              )}
            </HStack>
          </VStack>
        </ActionsheetContent>

        <ConfirmDialog
          isDisabled={loading}
          showAlertDialog={showConfirmDialog}
          setShowAlertDialog={setShowConfirmDialog}
          functionToCall={handleApply}
          params={{}}
          dialogData={{
            title: "Apply Event",
            message: "Are you sure you want to apply for this event?",
            confirmButtonText: "Apply",
            cancelButtonText: "Cancel",
          }}
        />
      </Actionsheet>
    </>
  );
}

export default ApplicationAction;
