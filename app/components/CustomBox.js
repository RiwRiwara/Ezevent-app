import { config } from "@gluestack-ui/config";
import {
    Box,
    Image,
    Text,
} from "@gluestack-ui/themed";
import { COLORS } from "../../config/color";
import React from "react";

function CustomBox({ color, text, num, imageUri }) {
    return (
        <Box w="120px" h="110px" mt="10px" ml="10px" borderRadius="$md" position="relative" overflow="hidden" bg={color}>
            <Text size="md" bold={true} position="absolute" top="3px" left="5px" color='white'>{text}</Text>
            <Text size="lg" bold={true} position="absolute" bottom="0px" left="5px" color='white'>{num}</Text>
            <Image
                size="md"
                borderRadius="$none"
                position="absolute"
                bottom="-35px"
                right="-30px"
                transform="rotate(40deg)"
                width="100px"
                height="100px"
                source={
                    imageUri
                }
            />
        </Box>
    );
}

export default CustomBox;