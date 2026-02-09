'use client'

import { Box, Heading, Text, Button, Container, VStack, Icon } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
            <Container maxW="container.xl" textAlign="center">
                <VStack spacing={6}>
                    <Heading size="4xl" color="teal.500">404</Heading>
                    <Heading size="xl" color="gray.700">Page Not Found</Heading>
                    <Text fontSize="lg" color="gray.500">
                        Sorry, we couldn't find the page you're looking for.
                    </Text>
                    <Link href="/" passHref>
                        <Button colorScheme="teal" size="lg" leftIcon={<Icon as={FaHome} />}>
                            Back to Home
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Box>
    );
}
