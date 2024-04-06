import React, { useState, useRef } from 'react';
import {
  Center,
  Button,
  Text,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Icon,
  CloseIcon,
  HStack,
} from '@gluestack-ui/themed';

function CustomModal({ buttonText, title }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  return (
    <Center>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <Text>{buttonText}</Text>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
        <ModalHeader/>
            <Center>
              <Heading size='lg' color="$neutral9" marginBottom="$5">{title}</Heading>
            </Center>
          <Center>
            <HStack>
              <Button
              size="sm"
              backgroundColor="$danger6"
              borderWidth='$0'
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text color="$white">YES</Text>
            </Button>
            <Button
              size="sm"
              backgroundColor="$primary3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text color="$white">NO</Text>
              </Button>
            </HStack>
          </Center>
          <ModalFooter/>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default CustomModal;
