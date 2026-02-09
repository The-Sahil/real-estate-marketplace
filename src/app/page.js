'use client'

import { Container, SimpleGrid, Heading, Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PropertyCard from '@/components/PropertyCard';
import SearchFilters from '@/components/SearchFilters';
import Footer from '@/components/Footer';
import { properties } from '@/data';
import { useFilters } from '@/context/FilterContext';

const MotionSimpleGrid = motion(SimpleGrid);

export default function Home() {
  const { filters } = useFilters();

  const filteredProperties = properties.filter(property => {
    // Filter by Type
    if (filters.type !== 'All' && property.type !== filters.type) return false;

    // Filter by Price
    if (property.price > filters.maxPrice) return false;

    // Filter by Beds
    if (filters.beds !== 'Any' && property.beds < parseInt(filters.beds)) return false;

    // Filter by Location
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;

    return true;
  });

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <HeroSection />

      <Container maxW="container.xl" flex="1">
        <SearchFilters />

        <Box mb={12} mt={12}>
          <Heading as="h2" size="xl" mb={4} color="gray.700">
            Featured Properties
          </Heading>
          <Text fontSize="lg" color="gray.500">
            {filteredProperties.length} properties found based on your criteria.
          </Text>
        </Box>

        {filteredProperties.length > 0 ? (
          <MotionSimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            mb={20}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </MotionSimpleGrid>
        ) : (
          <VStack spacing={4} minH="300px" justify="center">
            <Text fontSize="xl" color="gray.500">No properties found matching your filters.</Text>
            <Text color="teal.500" cursor="pointer" onClick={() => window.location.reload()}>Clear Filters</Text>
          </VStack>
        )}
      </Container>

      <Footer />
    </Box>
  );
}
