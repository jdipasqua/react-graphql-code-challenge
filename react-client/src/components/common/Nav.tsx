import { ReactNode } from 'react';

import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={''}>
        {children}
    </Link>
);

const Links = ['Home'];

export const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Challenge Jorge :)</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>


                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button data-testid="theme-button" onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon data-testid="moon-icon" /> : <SunIcon data-testid="sun-icon" />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://bit.ly/broken-link'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://bit.ly/broken-link'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>What's up? 🤙🏽</p>
                                    </Center>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}