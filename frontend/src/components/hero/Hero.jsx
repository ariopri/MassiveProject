import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import IMGHero from '../../assets/Hero.png';
import { Link as LinkTo } from 'react-router-dom';

const Hero = () => {
  return (
    <Stack
      as={Container}
      direction={{ base: 'column', lg: 'row' }}
      maxW={'7xl'}>
      <Flex
        py={{ base: 0, md: 8 }}
        flex={1}
        align={'center'}
        order={{ base: 2, lg: 1 }}
        data-aos="fade-right">
        <Stack spacing={6} w={'full'}>
          <Heading
            mt={{ base: 4, md: 0 }}
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight={600}>
            <Text
              fontWeight="extrabold"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              Let It Be
            </Text>
            <Text fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
              Solusi untuk persiapan sbmptn dan Rain Mimpimu
            </Text>
          </Heading>
          <Text fontSize={'md'} color={'gray.500'} align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nunc vel tincidunt lacinia, nisl nisl aliquet nunc, eget
          </Text>
          <Stack
            align={'center'}
            direction={{ base: 'column-reverse', sm: 'row', md: 'row' }}
            justifyContent={{
              base: 'center',
              sm: 'space-between',
              md: 'space-between',
            }}
            spacing={{ sm: 20 }}>
            <Box>
              <Button
                as={LinkTo}
                to="/register"
                size={{ base: 'md', md: 'lg' }}
                w={{ base: 'xs', sm: 'full' }}
                rounded={'full'}
                colorScheme={'blue'}
                color={useColorModeValue('white', 'black')}
                // bg={useColorModeValue('accentLight.400', 'accentDark.400')}
                _hover={{
                  bg: useColorModeValue('accentLight.500', 'accentDark.500'),
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}>
                Daftar Sekarang
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        data-aos="fade-left"
        flex={1}
        align={'center'}
        justify={'center'}
        order={{ base: 1, lg: 2 }}
        pl={{ md: '40px' }}>
        <Image p={5} alt={''} objectFit={'cover'} src={IMGHero} />
      </Flex>
    </Stack>
  );
};

export default Hero;
