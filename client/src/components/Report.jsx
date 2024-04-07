import React from 'react'
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react'


export default function Report(props) {
  return (
    <Card maxW='sm' bg='#DBF3F9'>
      <CardBody>
        <Image
          src={props.image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title}</Heading>
          <Text>
            {props.description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
