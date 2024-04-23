import React from 'react'
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'


import image from '../assets/kaori.png'

import {Form,Input} from 'antd'
const { TextArea } = Input;

export default function Report(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'
        onClick={onOpen}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={props.image}
          alt='Loading...'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{props.title}</Heading>

            <Text py='2'>
              {props.description}
            </Text>
          </CardBody>
        </Stack>
      </Card>


      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(8px)' />

        <ModalContent>
          <div className='m-8'>
            <h1 className='text-5xl mb-2 ml-6 font-bold'>{props.title}</h1>
            <ModalCloseButton />
            <ModalBody >
              <img src={image} alt="" className='rounded-sm' />
              <p className='text-xl text-justify'>{props.description}</p>
            </ModalBody>
            <div className='flex justify-center m-2'>
              <div className='bg-zinc-900 w-10/12 h-0.5 rounded'></div>
            </div>
            <label htmlFor="address" className='font-bold text-xl mx-2'>Location: </label>
            <h3 className='text-xl'>{props.address}</h3>
            <ModalFooter>
              <h1>Response:</h1>
              <Form.Item label="Description">
                            <TextArea name='description' rows={2} />
                        </Form.Item>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
