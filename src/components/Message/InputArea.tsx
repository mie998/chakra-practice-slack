import React, { FC } from 'react';
import { Stack, HStack, Box, Textarea, Spacer } from '@chakra-ui/react';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiLink,
} from 'react-icons/bi';
import { FaLanguage } from 'react-icons/fa';
import { GoMention } from 'react-icons/go';
import { GrEmoji } from 'react-icons/gr';

const InputArea: FC = () => {
  const handleReturn = () => {
    console.log('handling');
  };

  return (
    <Stack
      borderRadius="5"
      border="2px"
      borderColor="gray.200"
      m="0 auto"
      zIndex="sticky"
      position="relative"
      width="calc(100% * 9 / 10)"
      bottom="5"
    >
      <Textarea
        placeholder="Message #general"
        border="none"
        resize="none"
        size="xs"
        onChange={() => handleReturn}
      />
      <HStack borderTop="2px" borderColor="gray.400" p="2" color="gray.600">
        <HiOutlineLightningBolt />
        <BiBold />
        <BiItalic />
        <BiStrikethrough />
        <BiCodeAlt />
        <BiLink />
        <Spacer />
        <FaLanguage />
        <GoMention />
        <GrEmoji />
      </HStack>
    </Stack>
  );
};

export default InputArea;
