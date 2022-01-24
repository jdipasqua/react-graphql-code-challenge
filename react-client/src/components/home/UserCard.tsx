import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons';
import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { User } from '../../models/User';

export const UserCard = (user: User) => {
    return (
        <Center py={6}>
            <Stack
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={user.img}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {user.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                        <AtSignIcon />
                        {user.name.toLowerCase().replace(/\s/g, '')}
                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        <PhoneIcon />
                        {user.phone}
                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        {user.email}
                    </Text>
                </Stack>
            </Stack>
        </Center>
    );
}