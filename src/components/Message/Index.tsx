import { Stack, Box, Spacer } from '@chakra-ui/react';
import React, { FC } from 'react';
import InputArea from './InputArea';

const Index: FC = () => (
  <Stack height="95vh" width="100%" bg="black" color="white">
    <Spacer />
    <Box textAlign="center">
      <InputArea />
    </Box>
  </Stack>
);

export default Index;
