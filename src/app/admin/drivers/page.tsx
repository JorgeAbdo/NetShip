'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';

// Custom components
import TableTopCreators from 'views/admin/drivers/components/TableTopCreators';
import HistoryItem from 'views/admin/drivers/components/HistoryItem';
import Banner from 'views/admin/drivers/components/Banner';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';
import tableDataTopCreators from 'views/admin/drivers/variables/tableDataTopCreators';

// Assets
import Nft1 from 'img/nfts/Nft1.png';
import Nft2 from 'img/nfts/Nft2.png';
import Nft3 from 'img/nfts/Nft3.png';
import Nft4 from 'img/netship/versa.png';
import Nft5 from 'img/netship/nissan.png';
import Nft6 from 'img/nfts/Nft6.png';
import Avatar1 from 'img/services/walmart.png';
import Avatar2 from 'img/services/uber.png';
import Avatar3 from 'img/services/mercadolibre.png';
import Avatar4 from 'img/services/didi.png';
import AdminLayout from 'layouts/admin';

export default function NftMarketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
        >
          <Banner />
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Drivers Activos
              </Text>
              <Flex
                align="center"
                me="20px"
                ms={{ base: '24px', md: '0px' }}
                mt={{ base: '20px', md: '0px' }}
              >
                <Link
                  href="#art"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Uber/Didi
                </Link>
                <Link
                  href="#music"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Paqueteria
                </Link>
                <Link
                  href="#collectibles"
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                >
                  Particular
                </Link>
                <Link href="#sports" color={textColorBrand} fontWeight="500">
                  Otros
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid="Uber"
                download="#"
              />
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid="Uber"
                download="#"
              />
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid="DropIn"
                download="#"
              />
            </SimpleGrid>

            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap="20px"
              mb={{ base: '20px', xl: '0px' }}
              mt="20px"
            >
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid="Cubbo"
                download="#"
              />
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid="Mercado Libre"
                download="#"
              />
              <NFT
                name="Jorge Abdo"
                author="Nissan Versa"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid="DropIn"
                download="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
        >
          <Card px="0px" mb="20px">
            <TableTopCreators tableData={tableDataTopCreators} />
          </Card>
          <Card p="0px">
            <Flex
              align={{ sm: 'flex-start', lg: 'center' }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Tasks Completados
              </Text>
              <Button variant="action">Ver Todos</Button>
            </Flex>

            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar1}
              price="$1200 MXN"
            />
            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar2}
              price="$1200 MXN"
            />
            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar3}
              price="$1200 MXN"
            />
            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar4}
              price="$1200 MXN"
            />
            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar3}
              price="$1200 MXN"
            />
            <HistoryItem
              name="Jorge Abdo"
              author="03/08/24"
              date=""
              image={Avatar1}
              price="$1200 MXN"
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
