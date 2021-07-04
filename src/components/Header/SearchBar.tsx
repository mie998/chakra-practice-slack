import React, { FC } from 'react';
import { Box, Input } from '@chakra-ui/react';

const SearchBar: FC = () => (
  <Box>
    <Input height="6" placeholder="Nishiwaki@Dev 内を検索する" />
  </Box>
);

export default SearchBar;
