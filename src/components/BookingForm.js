'use client'

import { Box, Heading, VStack, FormControl, FormLabel, Input, Button, useToast, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

export default function BookingForm({ propertyTitle }) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Booking Request:', { property: propertyTitle, ...formData });

            toast({
                title: "Booking Request Sent!",
                description: "We'll get back to you shortly to schedule a viewing.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });

            setFormData({ name: '', email: '', phone: '', message: '' });
            setLoading(false);
        }, 1500);
    };

    return (
        <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" border="1px" borderColor="gray.100">
            <Heading size="md" mb={4} color="teal.600">
                Book a Viewing
            </Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Message (Optional)</FormLabel>
                        <Textarea
                            placeholder="I'm interested in this property..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="teal"
                        w="full"
                        size="lg"
                        isLoading={loading}
                        loadingText="Sending..."
                    >
                        Send Request
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}
