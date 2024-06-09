// Chakra imports
import { Flex, useColorModeValue, Box } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column" pr="10px" pl="0px">
      <Box borderRadius="30px">
        <HorizonLogo h="50px" w="130px" color={logoColor} />
      </Box>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
