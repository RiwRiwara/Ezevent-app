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

function UploadMultiImageActionSheet({ refresh, setRefresh, imgUrl }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [imateData1, setImageData1] = useState(null);
  const [imateData2, setImageData2] = useState(null);
  const [imateData3, setImageData3] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async (image) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
    });

    if (!result.canceled) {
      if (image === 1) {
        setImage1(result.assets[0].uri);
        setImageData1(result.assets[0]);
      } else if (image === 2) {
        setImage2(result.assets[0].uri);
        setImageData2(result.assets[0]);
      } else if (image === 3) {
        setImage3(result.assets[0].uri);
        setImageData3(result.assets[0]);
      }
    }
  };

  const handleUpload = async (image) => {
    if (image === 1) {
      handleUploadImage(imateData1);
    } else if (image === 2) {
      handleUploadImage(imateData2);
    } else if (image === 3) {
      handleUploadImage(imateData3);
    }
  };

  const handleUploadImage = async (imageData) => {
    setLoading(true);
    try {
      var token = await AsyncStorage.getItem("token");
      const url = getApiUrl(API_ENDPOINTS.UPLOAD_PROFILE_IMAGE);
      axios
        .post(
          url,
          { image: imageData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);

          setLoading(false);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Button px={9} backgroundColor="$gray0" onPress={handleClose}>
        <Text fontSize="$paragraph" color="$primary5">
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
            <Image
              size="lg"
              borderRadius={10}
              source={{
                uri: image1 || (DEFAULT_IMAGES.userprofile),
              }}
              alt="Image1"
            />
          </View>

          <ActionsheetItem
            onPress={() => pickImage(1)}
            mb={0}
            isDisabled={loading}
          >
            <View flex={1} flexDirection="row" gap={10} alignItems="center">
              <ImageUp />
              <Text fontWeight="bold">Choose Picture</Text>
            </View>

            {image1 && (
              <>
                <Button onPress={handleUpload}>
                  <Text color="$gray0">Upload</Text>
                </Button>
              </>
            )}
          </ActionsheetItem>

          <View mt={10}>
            <Image
              size="lg"
              borderRadius={10}
              source={{
                uri: image2 || (DEFAULT_IMAGES.userprofile),
              }}
              alt="Image2"
            />
          </View>

          <ActionsheetItem
            onPress={() => pickImage(2)}
            mb={0}
            isDisabled={loading}
          >
            <View flex={1} flexDirection="row" gap={10} alignItems="center">
              <ImageUp />
              <Text fontWeight="bold">Choose Picture</Text>
            </View>

            {image2 && (
              <>
                <Button onPress={handleUpload}>
                  <Text color="$gray0">Upload</Text>
                </Button>
              </>
            )}
          </ActionsheetItem>

          <View mt={10}>
            <Image
              size="lg"
              borderRadius={10}
              source={{
                uri: image3 || (DEFAULT_IMAGES.userprofile),
              }}
              alt="Image3"
            />
          </View>

          <ActionsheetItem
            onPress={() => pickImage(3)}
            mb={20}
            isDisabled={loading}
          >
            <View flex={1} flexDirection="row" gap={10} alignItems="center">
              <ImageUp />
              <Text fontWeight="bold">Choose Picture</Text>
            </View>

            {image3 && (
              <>
                <Button onPress={handleUpload}>
                  <Text color="$gray0">Upload</Text>
                </Button>
              </>
            )}
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default UploadMultiImageActionSheet;
