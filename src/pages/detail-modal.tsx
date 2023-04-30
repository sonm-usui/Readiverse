import React from "react";
import {Image, Modal, Text, VStack} from "native-base";

export function DetailModal({
  showModal,
  setShowModal,
  data
}: any) {
  return (
    <Modal
      size="full"
      margin={0}
      justifyContent="flex-end"
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <Modal.Content bgColor="white" height="100%">
        <Modal.CloseButton />
        <Modal.Header>Words Detail</Modal.Header>
        <Modal.Body>
          <VStack px="12px" alignItems="center" space="16px">
            <VStack alignItems="center">
              <Text fontSize="12px" fontWeight={500} color="gray.700">
                1
              </Text>
            </VStack>
            <VStack space="2px">
              <Text fontSize="16px" fontWeight={500}>
                2
              </Text>
              <Text fontSize="14px" color="black60">
                3
              </Text>
            </VStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default DetailModal;
