import React, { FC, useEffect, useRef } from 'react';
import autosize from 'autosize';
import { Stack, HStack, Textarea, Spacer } from '@chakra-ui/react';
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

const AutoResizeTextArea = React.forwardRef((props, ref: any) => {
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      resize="none"
      ref={ref}
      minRows={1}
      placeholder="Message #general"
      border="none"
      size="xs"
      minHeight="10"
      maxHeight="120"
      _focus={{
        boxShadow: '0 0 0 4px rgba(35, 167, 195, 0.3)',
      }}
      {...props}
    />
  );
});

const InputArea: FC = () => {
  const ref = useRef<any>(null!);
  useEffect(() => {
    autosize(ref.current);

    return () => {
      // eslint-disable-next-line
      autosize.destroy(ref.current);
    };
  }, []);

  // const handleReturn = () => {
  //   console.log('handling');
  // };

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
      <AutoResizeTextArea ref={ref} />
      <HStack borderTop="2px" borderColor="gray.400" p="2" color="gray.500">
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
