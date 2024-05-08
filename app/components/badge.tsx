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
    <VStack mr="$4">
      <Image source={{uri: image_src}} alt={badge_name} size='xs'/>
    </VStack>
  );
};

export default Badge;
