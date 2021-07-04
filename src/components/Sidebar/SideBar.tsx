import React, { FC } from 'react';
import { Stack, HStack, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const Description: FC = () => (
  <HStack borderBottom="1px" borderColor="teal.600">
    <Text>Description</Text>
    <EditIcon />
  </HStack>
);

const SiderBar: FC = () => (
  <Stack
    as="nav"
    height="100vh"
    bg="teal.500"
    borderRight="1px"
    borderColor="teal.600"
    color="white"
    fontSize="2xl"
    resize="horizontal"
    overflow="auto"
  >
    <Description />
    <Text>unchi</Text>
    <Text>unchi</Text>
    <Text>unchi</Text>
    <Text>unchi</Text>
    <Text>unchi</Text>
  </Stack>
);

export default SiderBar;
