'use client'

import { Container, SimpleGrid, Heading, Box, Text, Button, VStack } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { useFavorites } from '@/context/FavoritesContext';
import { properties } from '@/data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionSimpleGrid = motion(SimpleGrid);

export default function Favorites() {
    const { favorites } = useFavorites();

    const favoriteProperties = properties.filter(p => favorites.includes(p.id));

    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />

            <Container maxW="container.xl" py={12} flex="1">
                <Heading as="h1" size="2xl" mb={4} color="gray.700">
                    Your Saved Properties
                </Heading>
                <Text fontSize="lg" color="gray.500" mb={12}>
                    {favoriteProperties.length} properties saved for later.
                </Text>

                {favoriteProperties.length > 0 ? (
                    <MotionSimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        spacing={10}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {favoriteProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </MotionSimpleGrid>
                ) : (
                    <VStack spacing={6} minH="300px" justify="center" textAlign="center">
                        <Text fontSize="xl" color="gray.500">You haven't saved any properties yet.</Text>
                        <Link href="/" passHref>
                            <Button colorScheme="teal" size="lg">
                                Browse Properties
                            </Button>
                        </Link>
                    </VStack>
                )}
            </Container>

            <Footer />
        </Box>
    );
}
