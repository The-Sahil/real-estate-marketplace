'use client'

import { Box, Image, Badge, Text, Stack, Card, CardBody, Heading, Flex, Icon, IconButton } from '@chakra-ui/react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';

const MotionCard = motion(Card);

export default function PropertyCard({ property }) {
    const { title, price, image, beds, baths, sqft, id, type, location } = property;
    const { isFavorite, toggleFavorite } = useFavorites();
    const liked = isFavorite(id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
    };

    return (
        <MotionCard
            maxW="sm"
            overflow="hidden"
            variant="outline"
            whileHover={{ y: -8, boxShadow: "xl" }}
            transition={{ duration: 0.2 }}
            position="relative"
        >
            <Link href={`/property/${id}`} passHref legacyBehavior>
                <Box as="a" position="absolute" top={0} left={0} right={0} bottom={0} zIndex={1} />
            </Link>

            <Box position="relative">
                <Image
                    src={image}
                    alt={title}
                    height="220px"
                    width="100%"
                    objectFit="cover"
                />
                <IconButton
                    icon={liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    aria-label="Add to favorites"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="white"
                    borderRadius="full"
                    size="sm"
                    onClick={handleFavoriteClick}
                    _hover={{ bg: "gray.100", transform: "scale(1.1)" }}
                    boxShadow="md"
                    zIndex={2}
                />
                <Badge
                    position="absolute"
                    bottom={2}
                    left={2}
                    colorScheme="teal"
                    px={2}
                    py={1}
                    borderRadius="md"
                    boxShadow="sm"
                >
                    {type}
                </Badge>
            </Box>

            <CardBody>
                <Stack mt="2" spacing="3">
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text color="teal.600" fontSize="xl" fontWeight="bold">
                            ₹{price.toLocaleString('en-IN')}
                        </Text>
                        <Text fontSize="sm" color="gray.500">{location}</Text>
                    </Flex>

                    <Heading size="md" noOfLines={1} title={title}>
                        {title}
                    </Heading>

                    <Flex justifyContent="space-between" color="gray.600" fontSize="sm" mt={2} borderTop="1px" borderColor="gray.100" pt={3}>
                        <Flex alignItems="center">
                            <Icon as={FaBed} mr={1} />
                            <Text>{beds} Beds</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={FaBath} mr={1} />
                            <Text>{baths} Baths</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={FaRulerCombined} mr={1} />
                            <Text>{sqft} sqft</Text>
                        </Flex>
                    </Flex>
                </Stack>
            </CardBody>
        </MotionCard>
    );
}
