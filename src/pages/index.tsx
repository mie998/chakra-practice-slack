import { FC } from 'react';
import { Stack, HStack } from '@chakra-ui/react';

import Header from 'components/Header/Index';
import SideBar from 'components/Sidebar/Index';
import Resizer from 'components/Sidebar/Resizer';
import Message from 'components/Message/Index';

const Index: FC = () => (
  <Stack spacing="0">
    <Header />
    <HStack spacing="0">
      <SideBar />
      <Resizer />
      <Message />
    </HStack>
  </Stack>
);

export default Index;
