'use client'

import {
    Box, Flex, Heading, Spacer, Button, Container, IconButton,
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    useDisclosure, VStack, Link as ChakraLink, Badge
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { favorites } = useFavorites();

    return (
        <Box bg="white" boxShadow="sm" py={4} position="sticky" top={0} zIndex={100}>
            <Container maxW="container.xl">
                <Flex alignItems="center">
                    <Link href="/">
                        <Heading size="lg" color="teal.500" cursor="pointer">
                            Real Estate Marketplace
                        </Heading>
                    </Link>
                    <Spacer />

                    {/* Desktop Menu */}
                    <Flex display={{ base: "none", md: "flex" }} alignItems="center">
                        <Button as={Link} href="/" colorScheme="teal" variant="ghost" mr={4}>
                            Home
                        </Button>
                        <Button as={Link} href="/favorites" colorScheme="teal" variant="ghost" mr={4} leftIcon={<FaHeart />}>
                            Favorites {favorites.length > 0 && <Badge ml={1} colorScheme="red" borderRadius="full">{favorites.length}</Badge>}
                        </Button>
                        <Button colorScheme="teal" variant="solid">
                            Contact Us
                        </Button>
                    </Flex>

                    {/* Mobile Menu Button */}
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        variant="outline"
                    />

                    {/* Mobile Drawer */}
                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4} align="stretch" mt={4}>
                                    <Button as={Link} href="/" w="full" variant="ghost" onClick={onClose}>
                                        Home
                                    </Button>
                                    <Button as={Link} href="/favorites" w="full" variant="ghost" onClick={onClose} leftIcon={<FaHeart />}>
                                        Favorites {favorites.length > 0 && <Badge ml={1} colorScheme="red" borderRadius="full">{favorites.length}</Badge>}
                                    </Button>
                                    <Button w="full" colorScheme="teal" onClick={onClose}>
                                        Contact Us
                                    </Button>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Container>
        </Box>
    );
}
