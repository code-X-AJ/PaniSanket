import React from 'react'

import { IoIosAdd } from "react-icons/io";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'

export default function Form() {

    console.log("heelo")

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button className='fixed bottom-8 right-8 bg-cyan-400 rounded' onClick={onOpen}>
          <IoIosAdd className='size-14 m-0' />
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
