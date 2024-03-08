import { Box, Button, Container, FormControl, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, VStack, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

const HeroSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <Box paddingTop="100px" marginBottom="10">
            <Container maxW={{
                base: 'full',
                sm: 'md',
                md: "container.md",
                lg: "container.lg",
            }}>
                <VStack textAlign="center" gap="4">
                    <Heading
                        color="purple"
                        fontWeight="normal"
                        fontFamily="Caveat"
                        fontSize={{
                            base: "x-large",
                            md: '30px',
                            lg: '35px'
                        }}
                    >
                        the tweet breeze
                    </Heading>
                    <Heading
                        fontSize={{
                            base: '30px',
                            md: '40px',
                            lg: '45px'
                        }}
                        fontWeight="800"
                    >
                        Start Collecting Imaginations
                    </Heading>
                    <Button
                        colorScheme="gray"
                        onClick={onOpen}
                    >
                        Create your imaginations
                    </Button>
                </VStack>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>What is your imagination?</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl display="flex" flexDirection='column' gap="3">
                                <Input ref={initialRef} placeholder='Masukkan tittle...' />
                                <Textarea placeholder="Say everything..."></Textarea>
                                <Input type="text" placeholder="#Category" maxW="40" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Post
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </Box>
    )
}

export default HeroSection
