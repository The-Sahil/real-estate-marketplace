'use client'

import { useParams, useRouter } from 'next/navigation';
import { Box, Container, Heading, Text, Badge, Flex, SimpleGrid, Icon, Stack, Button, Divider } from '@chakra-ui/react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import BookingForm from '@/components/BookingForm';
import MortgageCalculator from '@/components/MortgageCalculator';
import { properties } from '@/data';
import { useEffect, useState } from 'react';

export default function PropertyDetails() {
    const { id } = useParams();
    const router = useRouter();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        if (id) {
            const found = properties.find(p => p.id === parseInt(id));
            setProperty(found);
        }
    }, [id]);

    if (!property) {
        return (
            <Box>
                <Navbar />
                <Container maxW="container.xl" py={20} textAlign="center">
                    <Heading>Loading Property...</Heading>
                </Container>
            </Box>
        );
    }

    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />

            <Container maxW="container.xl" py={8} flex="1">
                <Button
                    leftIcon={<FaArrowLeft />}
                    variant="ghost"
                    mb={6}
                    onClick={() => router.back()}
                >
                    Back to Listings
                </Button>

                <ImageGallery images={property.images || [property.image]} />

                <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>

                    {/* Main Content */}
                    <Box gridColumn={{ lg: "span 2" }}>
                        <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
                            <Box>
                                <Badge colorScheme="teal" fontSize="0.9em" mb={2} px={2} py={1} borderRadius="md">
                                    {property.type}
                                </Badge>
                                <Heading as="h1" size="2xl" mb={2}>{property.title}</Heading>
                                <Flex alignItems="center" color="gray.600" fontSize="lg">
                                    <Icon as={FaMapMarkerAlt} mr={2} color="teal.500" />
                                    <Text>{property.location}</Text>
                                </Flex>
                            </Box>
                            <Heading color="teal.600" size="xl">
                                ₹{property.price.toLocaleString('en-IN')}
                            </Heading>
                        </Flex>

                        <Flex
                            borderY="1px" borderColor="gray.200"
                            py={6} mb={8}
                            justifyContent="space-around"
                            bg="gray.50"
                            borderRadius="md"
                        >
                            <Flex direction="column" alignItems="center">
                                <Icon as={FaBed} w={6} h={6} mb={2} color="teal.500" />
                                <Text fontWeight="bold">{property.beds} Beds</Text>
                            </Flex>
                            <Flex direction="column" alignItems="center">
                                <Icon as={FaBath} w={6} h={6} mb={2} color="teal.500" />
                                <Text fontWeight="bold">{property.baths} Baths</Text>
                            </Flex>
                            <Flex direction="column" alignItems="center">
                                <Icon as={FaRulerCombined} w={6} h={6} mb={2} color="teal.500" />
                                <Text fontWeight="bold">{property.sqft} Sqft</Text>
                            </Flex>
                        </Flex>

                        <Box mb={10}>
                            <Heading size="lg" mb={4}>Description</Heading>
                            <Text fontSize="lg" color="gray.600" lineHeight="1.8">
                                {property.description}
                            </Text>
                        </Box>

                        <Box mb={10}>
                            <Heading size="lg" mb={4}>Amenities</Heading>
                            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                                {property.amenities?.map((amenity, index) => (
                                    <Flex key={index} alignItems="center" bg="white" p={3} borderRadius="md" boxShadow="sm" border="1px" borderColor="gray.100">
                                        <Icon as={FaCheckCircle} color="teal.500" mr={3} />
                                        <Text fontWeight="medium">{amenity}</Text>
                                    </Flex>
                                ))}
                            </SimpleGrid>
                        </Box>

                        <Box>
                            <MortgageCalculator initialPrice={property.price} />
                        </Box>
                    </Box>

                    {/* Sidebar */}
                    <Box>
                        <Box position="sticky" top="100px">
                            <BookingForm propertyTitle={property.title} />

                            <Box bg="teal.50" p={6} mt={6} borderRadius="lg" textAlign="center">
                                <Heading size="md" mb={2}>Need Assistance?</Heading>
                                <Text color="gray.600" mb={4}>Call our expert agents directly.</Text>
                                <Button colorScheme="teal" variant="outline" w="full" leftIcon={<Icon as={FaCheckCircle} />}>
                                    +91 98765 43210
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                </SimpleGrid>
            </Container>

            <Footer />
        </Box>
    );
}
