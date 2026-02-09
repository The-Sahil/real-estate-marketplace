'use client'

import { Box, Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

export default function ImageGallery({ images }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
        onOpen();
    };

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mb={8} borderRadius="xl" overflow="hidden">
                <Box h="400px" overflow="hidden" cursor="pointer" onClick={() => handleImageClick(images[0])}>
                    <MotionImage
                        src={images[0]}
                        alt="Main Property Image"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </Box>
                <SimpleGrid columns={2} spacing={2} h="400px">
                    {images.slice(1, 4).map((img, index) => (
                        <Box key={index} overflow="hidden" cursor="pointer" onClick={() => handleImageClick(img)}>
                            <MotionImage
                                src={img}
                                alt={`Property Image ${index + 2}`}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Box>
                    ))}
                    {/* Fallback if not enough images */}
                    {images.length < 2 && <Box bg="gray.100" />}
                    {images.length < 3 && <Box bg="gray.100" />}
                    {images.length < 4 && <Box bg="gray.100" />}
                </SimpleGrid>
            </SimpleGrid>

            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay backdropFilter="blur(5px)" />
                <ModalContent bg="transparent" boxShadow="none">
                    <ModalCloseButton color="white" size="lg" zIndex={10} />
                    <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
                        <Image src={selectedImage} maxH="90vh" objectFit="contain" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
