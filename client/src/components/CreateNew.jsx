import React from 'react'

import { IoIosAdd } from "react-icons/io";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

function CreateNew() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <button className="fixed bottom-6 right-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-cyan-600 hover:bg-cyan-800 hover:text-white text-gray-50 font-bold leading-loose transition duration-200" onClick={onOpen}>
                <IoIosAdd className='size-8 m-1 inline-block' />
                Create New
            </button>

            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(8px)' />
                <ModalContent>
                    <h1 className='text-center text-5xl m-4 font-bold'>Report</h1>
                    <ModalCloseButton />
                    <ModalBody>
                        <form action="" method="post" className=''>
                            <ul className='grid grid-cols-1 mx-20'>
                                <li className='grid m-1'>
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" name="fullname" id="" placeholder='Enter your fullname' className='border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none' />
                                </li>
                                <li  className='grid m-1'>
                                    <label htmlFor="Address">Address</label>
                                    <input type="text" name="Address" id="" placeholder='Enter your Address' className='border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none' />
                                </li>
                                <li  className='grid m-1'>
                                    <label htmlFor="Issue">Issue</label>
                                    <input type="text" name="Issue" id="" placeholder='Enter your Issue' className='border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none' />
                                </li>
                                <li  className='grid m-1'>
                                    <label htmlFor="description">description</label>
                                    <textarea name="descripton" id="" placeholder='Enter your descripton' cols="30" rows="1" className='border-teal-600 border-b-2 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none flex justify-end'></textarea>
                                </li>
                                <li  className='grid m-1'>
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="Email" id="" placeholder='Enter your Email' className='border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none' />
                                </li>
                                <li  className='grid m-1'>
                                    <label htmlFor="images">Images</label>
                                    <input type="file" name="images" id="" placeholder='Enter your images' className='' />
                                </li>
                            </ul>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button mr={3} colorScheme='teal' type='submit'>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateNew;