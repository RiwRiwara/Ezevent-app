import React, { useState, useEffect } from "react";
import {
  useStyled,
  VStack,
  HStack,
  View,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
  Input,
  InputField,
  FormControl,
  ActionsheetItem,
  ActionsheetItemText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetFlatList,
  ActionsheetIcon,
  Image,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { ImageUp } from "lucide-react-native";
import { DEFAULT_IMAGES } from "@constants/azure/azureimageurl";
import { API_ENDPOINTS, getApiUrl } from "@constants/api/endpoints";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UploadImageActionSheet() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const [image, setImage] = useState(null);
  const [imateData, setImageData] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageData(result.assets[0]);
    }

  };

  const handleUpload = async () => {

    // send the image to the server
    try {
      var token = await AsyncStorage.getItem("token");
      const url = getApiUrl(API_ENDPOINTS.UPLOAD_PROFILE_IMAGE);
      axios
        .post(
          url,
          { image: imateData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button px={9} backgroundColor="$gray0" onPress={handleClose}>
        <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
          Edit
        </Text>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <View mt={10}>
            <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
              <AvatarFallbackText>Upload Image</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: image || DEFAULT_IMAGES.userprofile,
                }}
                alt="Profile Image"
              />
            </Avatar>
          </View>

          <ActionsheetItem onPress={pickImage} mb={20}>
            <View flex={1} flexDirection="row" gap={10} alignItems="center">
              <ImageUp />
              <Text fontWeight="bold">Choose profile picture</Text>
            </View>
            {image && (
              <Button onPress={handleUpload}>
                <Text color="$gray0">Upload</Text>
              </Button>
            )}
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default UploadImageActionSheet;
