import React from 'react';
import {
  VStack,
  Text,
  Image,
} from "@gluestack-ui/themed";

interface StarProps {
  number_star: number;
}

const Stars: React.FC<StarProps> = ({ number_star }) => {
  return (
    <VStack>
      <Image source={{uri: "./assets/stars.png"}} size='xs'/>
      <Text>{number_star}</Text>
    </VStack>
  );
};

export default Stars;
