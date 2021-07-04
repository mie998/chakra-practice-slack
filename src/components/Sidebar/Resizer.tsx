import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const Resizer: FC = () => (
  <Box
    margin="0"
    height="100vh"
    width="3px"
    bg="cyan"
    cursor="col-resize"
    display="none"
    _hover={{ display: 'block' }}
  />
);

export default Resizer;
