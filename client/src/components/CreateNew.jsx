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
    Button,
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

function CreateNew() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <button className="fixed bottom-6 right-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-cyan-600 hover:bg-cyan-700 hover:text-white text-gray-50 font-bold leading-loose transition duration-200" onClick={onOpen}>
                <IoIosAdd className='size-8 m-1 inline-block' />
                Create New
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Report</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            mr={3}
                            colorScheme='teal'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateNew;