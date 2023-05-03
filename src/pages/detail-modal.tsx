import React from "react";
import {Image, Modal, Text, VStack} from "native-base";

export function DetailModal({
  showModal,
  setShowModal,
  data,
  title
}: any) {

  const handleClick = React.useCallback(() => setShowModal(false), [data]);
  
  return (
    <Modal
      size="full"
      margin={0}
      justifyContent="flex-end"
      isOpen={showModal}
      onClose={
        handleClick
      }
    >
      <Modal.Content bgColor="#2B2730" height="100%">
        <Modal.CloseButton />
        <Modal.Header bgColor="#2B2730">
          <Text style={{ color: '#BB86FC' }}>{title}</Text>
          </Modal.Header>
        <Modal.Body>
          <VStack px="12px" alignItems="center" space="16px">
            <VStack alignItems="center">
              <Text fontSize="12px" fontWeight={500} style={{ color: '#FFFFFF' }}>
              {data?.definition}
              </Text>
            </VStack>
            <VStack space="2px">
              <Text fontSize="16px" fontWeight={500} style={{ color: '#FFFFFF' }}>
                Example: {data?.examples}
              </Text>
              <Text fontSize="14px" style={{ color: '#FFFFFF' }}>
                {data?.author}
              </Text>
            </VStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default DetailModal;
