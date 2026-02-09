'use client'

import { Box, Flex, Select, Input, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Text, Stack } from '@chakra-ui/react';
import { useFilters } from '@/context/FilterContext';

export default function SearchFilters() {
    const { filters, updateFilter, resetFilters } = useFilters();

    return (
        <Box
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            mb={10}
            mt={-10}
            position="relative"
            zIndex={10}
            mx={{ base: 4, md: 0 }}
            border="1px"
            borderColor="gray.200"
        >
            <Stack direction={{ base: "column", md: "row" }} spacing={4} alignItems="flex-end">
                <Box flex="1">
                    <Text mb={2} fontWeight="bold" fontSize="sm" color="gray.600">Location</Text>
                    <Input
                        placeholder="City (e.g. Mumbai)"
                        value={filters.location}
                        onChange={(e) => updateFilter('location', e.target.value)}
                    />
                </Box>

                <Box w={{ base: "full", md: "200px" }}>
                    <Text mb={2} fontWeight="bold" fontSize="sm" color="gray.600">Property Type</Text>
                    <Select
                        value={filters.type}
                        onChange={(e) => updateFilter('type', e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Office">Office</option>
                        <option value="Studio">Studio</option>
                        <option value="Penthouse">Penthouse</option>
                    </Select>
                </Box>

                <Box w={{ base: "full", md: "150px" }}>
                    <Text mb={2} fontWeight="bold" fontSize="sm" color="gray.600">Bedrooms</Text>
                    <Select
                        value={filters.beds}
                        onChange={(e) => updateFilter('beds', e.target.value)}
                    >
                        <option value="Any">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </Select>
                </Box>

                <Box flex="1" px={2}>
                    <Text mb={2} fontWeight="bold" fontSize="sm" color="gray.600">Max Price: ₹{(filters.maxPrice / 100000).toFixed(1)} L</Text>
                    <Slider
                        aria-label="price-slider"
                        defaultValue={100000000}
                        min={1000000}
                        max={100000000}
                        step={1000000}
                        value={filters.maxPrice}
                        onChange={(val) => updateFilter('maxPrice', val)}
                    >
                        <SliderTrack bg="gray.200">
                            <SliderFilledTrack bg="teal.500" />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                </Box>

                <Button colorScheme="gray" variant="outline" onClick={resetFilters}>
                    Reset
                </Button>
            </Stack>
        </Box>
    );
}
