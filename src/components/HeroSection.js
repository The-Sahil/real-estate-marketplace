'use client'

import { Box, Heading, Text, Button, Container, Stack } from '@chakra-ui/react';

export default function HeroSection() {
    return (
        <Box
            bgImage="url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            bgPosition="center"
            bgSize="cover"
            h="60vh"
            display="flex"
            alignItems="center"
            position="relative"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 0, 0, 0.6)"
            />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Stack spacing={6} maxW="600px">
                    <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                        Find Your Dream Home
                    </Heading>
                    <Text fontSize="xl" color="gray.200">
                        Discover the perfect property that fits your lifestyle. From modern apartments to luxury villas, we have it all.
                    </Text>
                    <Button size="lg" colorScheme="teal" width="fit-content">
                        Explore Properties
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
