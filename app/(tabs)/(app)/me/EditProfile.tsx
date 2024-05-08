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
  Image,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import EditName from "@components/Profile/EditName";
import Shortbio from "@components/Profile/Shortbio";
import EditDesc from "@components/Profile/EditDesc";
import Personality from "@components/Profile/Personality";
import UploadImageActionSheet from "@components/Profile/UploadImageActionSheet";
import UploadMultiImageActionSheet from "@components/Profile/UploadMultiImageActionSheet";
import { GetMyprofile } from "@services/api/user/ApiGetMyProfile";
import { StyleSheet } from "react-native";
import { retrieveToken } from "@utils/RetrieveToken";
import EditNameAction from "@components/Profile/EditNameAction";

const EditProfile = () => {
  const styled = useStyled();
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

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = await retrieveToken();
        const data = await GetMyprofile(token);
        setUserData(data.user);
      } catch (error) {
        console.error("[EditProfile] : Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <View backgroundColor="$gray0">
      <ScrollView>
        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Profile Image
            </Text>

            <UploadImageActionSheet
              refresh={refresh}
              setRefresh={setRefresh}
              imgUrl={
                IMAGE_URLS.userprofile + "/" + userData?.profile_img ||
                DEFAULT_IMAGES.userprofile
              }
            />
          </HStack>

          <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
            <Avatar bgColor="$amber600" size="2xl" borderRadius="$full">
              {loading ? (
                <AvatarImage
                  source={{
                    uri: DEFAULT_IMAGES.userprofile,
                  }}
                  alt="Profile Image"
                />
              ) : (
                <AvatarImage
                  source={{
                    uri:
                      IMAGE_URLS.userprofile + "/" + userData?.profile_img ||
                      DEFAULT_IMAGES.userprofile,
                  }}
                  alt="Profile Image"
                />
              )}
            </Avatar>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            backgroundColor="$gray0"
            alignItems="center"
            px={10}
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Full Name
            </Text>
            <Button
              px={9}
              onPress={handleCloseEditName}
              backgroundColor="$gray0"
            >
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            {/* <EditNameAction /> */}
            
            <EditName
              isOpen={showEditName}
              onClose={handleCloseEditName}
              firstName={userData?.first_name}
              lastName={userData?.last_name}
            />
          </HStack>
          <VStack
            alignItems="center"
            bg="$gray0"
            w="$full"
            mb={10}
            gap={10}
            flexDirection="row"
            justifyContent="center"
          >
            <Text fontSize="$md"  color="$primary8">
              {userData?.first_name || "...."}
            </Text>
            <Text fontSize="$md"  color="$primary8">
              {userData?.last_name || "...."}
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8" mt={10}>
              Email
            </Text>
            <Text
              fontSize="$paragraph"
              fontWeight="$bold"
              color="$primary5"
            ></Text>
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" p="$3">
            <Text fontSize="$md"  color="$primary8">
              {userData?.email || "...."}
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
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
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            <Personality
              isOpen={showPersonality}
              onClose={handleClosePersonality}
              personality={userData?.personality}
            />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" mb={10}>
            <Text fontSize="$md" color="$neutral8">
              {userData?.personality || "...."}
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Short Bio
            </Text>
            <Button
              px={9}
              onPress={handleCloseShortbio}
              backgroundColor="$gray0"
            >
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            <Shortbio
              isOpen={showShortbio}
              onClose={handleCloseShortbio}
              shortBio={userData?.short_bio}
            />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" mb={10}>
            <Text fontSize="$md"  color="$neutral8">
              Hello my name is {userData?.first_name || "Robert Fox"}{" "}
              {userData?.last_name || "...."}
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Description
            </Text>
            <Button px={9} onPress={handleCloseDesc} backgroundColor="$gray0">
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            <EditDesc
              isOpen={showDesc}
              onClose={handleCloseDesc}
              description={userData?.description}
            />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" mb={10}>
            <Text fontSize="$md"  color="$neutral8">
              {userData?.description || "...."}
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Images
            </Text>

            <UploadMultiImageActionSheet
              refresh={refresh}
              setRefresh={setRefresh}
              imgUrl={
                IMAGE_URLS.userprofile + "/" + userData?.profile_img ||
                DEFAULT_IMAGES.userprofile
              }
            />
            <EditName isOpen={showEditName} onClose={handleCloseEditName} />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="full" p="3" mb={10}>
            <HStack space="2xl">
              <Image
                size="lg"
                borderRadius={10}
                source={{
                  uri:  DEFAULT_IMAGES.userprofile,
                }}
                alt="Image1"
              />
              <Image
                size="lg"
                borderRadius={10}
                source={{
                  uri:  DEFAULT_IMAGES.userprofile,
                }}
                alt="Image2"
              />
              <Image
                size="lg"
                borderRadius={10}
                source={{
                  uri:  DEFAULT_IMAGES.userprofile,
                }}
                alt="Image3"
              />
            </HStack>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Social Media
            </Text>
            <Button
              px={9}
              onPress={handleCloseEditName}
              backgroundColor="$gray0"
            >
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            <EditName isOpen={showEditName} onClose={handleCloseEditName} />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" mb={10}>
            <Text fontSize="$md" color="$neutral8">
              Social Media
            </Text>
          </VStack>
        </VStack>

        <VStack style={styles.borderbt}>
          <HStack
            justifyContent="space-between"
            px={10}
            backgroundColor="$gray0"
            alignItems="center"
          >
            <Text fontSize="$title_5" fontWeight="$bold" color="$neutral8">
              Address
            </Text>
            <Button
              px={9}
              onPress={handleCloseEditName}
              backgroundColor="$gray0"
            >
              <Text fontSize="$paragraph"  color="$primary5">
                Edit
              </Text>
            </Button>
            <EditName isOpen={showEditName} onClose={handleCloseEditName} />
          </HStack>
          <VStack alignItems="center" bg="$gray0" w="$full" mb={10}>
            <Text fontSize="$md"  color="$neutral8">
              {userData?.address || "Address"}
            </Text>
          </VStack>
        </VStack>
        <Box h={100}></Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  borderbt: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});

export default EditProfile;
