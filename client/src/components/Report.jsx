import React from 'react'
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'


export default function Report(props) {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={props.image}
    alt='Caffe Latte'
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
  );
}
