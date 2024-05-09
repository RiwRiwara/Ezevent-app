import React from "react"
import {
    Box,
    Image,
    Text,
} from "@gluestack-ui/themed";

function CustomBox({ color, text, num, imageUri }) {
    return (
        <Box w="120px" h="110px" mt="10px" ml="10px" borderRadius="$md" position="relative" overflow="hidden" bg={color}>
            <Text size="md" bold={true} position="absolute" top="3px" left="5px" color='white'>{text}</Text>
            <Text size="lg" bold={true} position="absolute" bottom="0px" left="5px" color='white'>{num}</Text>
            <Image
                alt=""
                size="md"
                borderRadius="$none"
                position="absolute"
                bottom="-35px"
                right="-30px"
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