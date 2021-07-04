import React, { FC } from 'react';
import { HStack } from '@chakra-ui/react';
import WorkSpaceSidebar from './WorkSpaceSidebar';
import SideBar from './SideBar';

const Index: FC = () => (
  <HStack marginTop="0" mt={{ base: 0 }} spacing="0">
    <WorkSpaceSidebar />
    <SideBar />
  </HStack>
);

export default Index;
