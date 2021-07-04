import { FC } from 'react';
import { Stack, HStack } from '@chakra-ui/react';

import Header from 'components/Header/Index';
import SideBar from 'components/Sidebar/Index';

const Index: FC = () => (
  <Stack spacing="0">
    <Header />
    <HStack>
      <SideBar />
      <p>wokign</p>
    </HStack>
  </Stack>
);

export default Index;
