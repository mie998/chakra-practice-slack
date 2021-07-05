import React, { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { BiUser } from 'react-icons/bi';

const BiUserS: FC = () => (
  <Box
    marginTop="2"
    border="4px"
    color="white"
    borderRadius="md"
    fontSize="3xl"
  >
    <BiUser />
  </Box>
);

const WorkSpaceSidebar: FC = () => (
  <Stack
    as="nav"
    height="95vh"
    bg="teal.500"
    spacing="4"
    borderRight="1px"
    borderColor="teal.600"
    paddingRight="2"
    paddingLeft="2"
  >
    <BiUserS />
    <BiUserS />
    <BiUserS />
    <BiUserS />
    <BiUserS />
  </Stack>
);

export default WorkSpaceSidebar;
