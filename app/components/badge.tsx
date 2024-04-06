import React from 'react';
import {
  VStack,
  Text,
  Image,
} from "@gluestack-ui/themed";

interface BadgeProps {
  badge_name: string;
  image_src: string;
}

const Badge: React.FC<BadgeProps> = ({ badge_name, image_src }) => {
  return (
    <VStack>
      <Image source={{uri: image_src}} alt={badge_name} size='xs'/>
      <Text>{badge_name}</Text>
    </VStack>
  );
};

export default Badge;
