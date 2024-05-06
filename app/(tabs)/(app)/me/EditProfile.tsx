import React, { useState, useEffect } from "react";
import "@i18n/i18n.config";
import { useSession } from "@providers/ctx";
import { Settings } from "lucide-react-native";
import { CalendarCheck2, Building2 } from "lucide-react-native";
import { IMAGE_URLS, DEFAULT_IMAGES } from "@constants/azure/azureimageurl";

import {
  useStyled,
  VStack,
  HStack,
  View,
  Text,
  Button,
  ScrollView,
  Box,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import EditName from "@components/Profile/EditName";
import Shortbio from "@components/Profile/Shortbio";
import EditDesc from "@components/Profile/EditDesc";
import Personality from "@components/Profile/Personality";
import UploadImage from "@components/Profile/UploadImage";
import UploadImageActionSheet from "@components/Profile/UploadImageActionSheet";
import { GetMyprofile } from "@services/api/user/ApiGetMyProfile";

const EditProfile = () => {
  const styled = useStyled();
  const { user, session } = useSession();
  const [showEditName, setShowEditName] = useState(false);
  const handleCloseEditName = () => setShowEditName(!showEditName);
  const [showShortbio, setShowShortbio] = useState(false);
  const handleCloseShortbio = () => setShowShortbio(!showShortbio);
  const [showDesc, setShowDesc] = useState(false);
  const handleCloseDesc = () => setShowDesc(!showDesc);
  const [showPersonality, setShowPersonality] = useState(false);
  const handleClosePersonality = () => setShowPersonality(!showPersonality);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [showUploadImage, setShowUploadImage] = useState(false);
  const handleCloseUploadImage = () => setShowUploadImage(!showUploadImage);

  useEffect(() => {
    setLoading(true);
    GetMyprofile(session)
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => {
        console.error("[EditProfile] : Error fetching profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [session]);

  return (
    <ScrollView>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Profile Image
          </Text>

          <UploadImageActionSheet />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
            <AvatarFallbackText>AP</AvatarFallbackText>
            <AvatarImage
              source={{
                uri:
                  IMAGE_URLS.userprofile + "/" + userData?.profile_img ||
                  DEFAULT_IMAGES.userprofile,
              }}
              alt="Profile Image"
            />
          </Avatar>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Full Name
          </Text>
          <Button px={9} onPress={handleCloseEditName} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <EditName
            isOpen={showEditName}
            onClose={handleCloseEditName}
            firstName={userData?.first_name}
            lastName={userData?.last_name}
          />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$primary8">
            {userData?.first_name || "Robert Fox"}{" "}
            {userData?.last_name || "Fox"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Email
          </Text>
          <Text
            fontSize="$paragraph"
            fontWeight="$bold"
            color="$primary5"
          ></Text>
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$primary8">
            {userData?.email || "robert@mail.com"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Personality
          </Text>
          <Button
            px={9}
            onPress={handleClosePersonality}
            backgroundColor="$gray0"
          >
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <Personality
            isOpen={showPersonality}
            onClose={handleClosePersonality}
            personality={userData?.personality}
          />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            {userData?.personality || "Personality"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Short Bio
          </Text>
          <Button px={9} onPress={handleCloseShortbio} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <Shortbio
            isOpen={showShortbio}
            onClose={handleCloseShortbio}
            shortBio={userData?.short_bio}
          />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            Hello my name is {userData?.first_name || "Robert Fox"}{" "}
            {userData?.last_name || "Fox"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Description
          </Text>
          <Button px={9} onPress={handleCloseDesc} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <EditDesc
            isOpen={showDesc}
            onClose={handleCloseDesc}
            description={userData?.description}
          />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            {userData?.description ||
              "Hello My name is Robert i study in thailand and i love cat , My hobbies is playing game and let adventure in real world i can’t do anything that it will improve the world"}
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Other Images
          </Text>
          <Button px={9} onPress={handleCloseEditName} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <EditName isOpen={showEditName} onClose={handleCloseEditName} />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <HStack space="2xl" p="$3">
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE1</Text>
            </Box>
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE2</Text>
            </Box>
            <Box w="$20" h="$20" bg="$gray1" alignItems="center">
              <Text color="$primary8">IMAGE3</Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Social Media
          </Text>
          <Button px={9} onPress={handleCloseEditName} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <EditName isOpen={showEditName} onClose={handleCloseEditName} />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            Social Media
          </Text>
        </VStack>
      </VStack>
      <VStack reversed={false}>
        <HStack
          justifyContent="space-between"
          p={10}
          h={50}
          backgroundColor="$gray0"
          alignItems="center"
        >
          <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
            Address
          </Text>
          <Button px={9} onPress={handleCloseEditName} backgroundColor="$gray0">
            <Text fontSize="$paragraph" fontWeight="$bold" color="$primary5">
              Edit
            </Text>
          </Button>
          <EditName isOpen={showEditName} onClose={handleCloseEditName} />
        </HStack>
        <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
          <Text fontSize="$md" fontWeight="$bold" color="$neutral8">
            {userData?.address || "Address"}
          </Text>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default EditProfile;
