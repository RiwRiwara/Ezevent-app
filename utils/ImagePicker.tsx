import { useState } from "react";
import { View, Image, Button, ButtonText } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View h={300} flex={1} flex="column">
      {image && <Image source={{ uri: image }} />}

      <Button onPress={pickImage} px={9}>
        <ButtonText>Choose Image</ButtonText>
      </Button>
    </View>
  );
}
