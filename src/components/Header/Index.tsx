import React, { FC } from 'react';
import { HStack, Flex } from '@chakra-ui/react';
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  TimeIcon,
  QuestionIcon,
  MinusIcon,
  SmallAddIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';

const Header: FC = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding={2}
    bg="teal.500"
    height="5vh"
    color="white"
    borderBottom="1px"
    borderColor="teal.600"
  >
    <Flex align="center" mr={5}>
      <MenuButton />
    </Flex>

    <HStack>
      <ArrowBackIcon />
      <ArrowForwardIcon />
      <TimeIcon />
      <SearchBar />
      <QuestionIcon />
    </HStack>

    <HStack spacing="4" fontSize="2xl">
      <BsFillPersonFill />
      <MinusIcon />
      <SmallAddIcon />
      <SmallCloseIcon />
    </HStack>
  </Flex>
);

export default Header;
