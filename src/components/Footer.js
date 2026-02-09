'use client'

import { Box, Container, Stack, Text, Link, Heading, Flex, IconButton, Input, Button } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box bg="gray.900" color="gray.200">
            <Container maxW="container.xl" py={12}>
                <Stack direction={{ base: "column", md: "row" }} spacing={8} justifyContent="space-between">

                    {/* Brand */}
                    <Box flex="1">
                        <Heading size="lg" color="teal.400" mb={4}>Sahil Estates</Heading>
                        <Text fontSize="sm" maxW="300px">
                            Helping you find the perfect place to call home. Sahil Estates is your trusted partner in real estate.
                        </Text>
                    </Box>

                    {/* Links */}
                    <Stack direction="row" spacing={12}>
                        <Stack spacing={3}>
                            <Text fontWeight="bold" color="white">Company</Text>
                            <Link href="#">About Us</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Contact</Link>
                        </Stack>
                        <Stack spacing={3}>
                            <Text fontWeight="bold" color="white">Legal</Text>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Terms of Service</Link>
                        </Stack>
                    </Stack>

                    {/* Newsletter */}
                    <Box flex="1">
                        <Text fontWeight="bold" color="white" mb={4}>Stay Updated</Text>
                        <Flex>
                            <Input placeholder="Enter your email" bg="gray.800" border="none" _focus={{ bg: "gray.700" }} mr={2} />
                            <Button colorScheme="teal">Subscribe</Button>
                        </Flex>

                        <Flex mt={6} gap={4}>
                            <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="ghost" colorScheme="teal" />
                            <IconButton aria-label="Facebook" icon={<FaFacebook />} variant="ghost" colorScheme="teal" />
                            <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" colorScheme="teal" />
                            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" colorScheme="teal" />
                        </Flex>
                    </Box>

                </Stack>

                <Box borderTopWidth={1} borderColor="gray.700" mt={12} pt={8} textAlign="center">
                    <Text fontSize="sm">&copy; {new Date().getFullYear()} Sahil Estates. All rights reserved.</Text>
                </Box>
            </Container>
        </Box>
    );
}
