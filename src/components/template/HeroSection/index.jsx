import { Box, Button, Container, FormControl, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useContext, useRef } from "react"
import LocaleContext from "../../../Features/Contexts/LocaleContext";

const HeroSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    // const [kategori, setKategori] = useState('');

    const { locale } = useContext(LocaleContext);
    const btnColor = useColorModeValue('purple', 'gray');
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
                        {locale === 'id' ? 'Mulailah Mengumpulkan Imajinasi' : 'Start Collecting Imaginations'}
                    </Heading>
                    <Button
                        colorScheme={btnColor}
                        onClick={onOpen}
                    >
                        {locale === 'id' ? 'Buat imaginasimu sekarang !!' : 'Create your imaginations now !!'}
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
                        <ModalHeader>{locale === 'id' ? 'Apa imajinasimu?' : 'What is your imagination?'}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl display="flex" flexDirection='column' gap="3">
                                <Input ref={initialRef} placeholder={locale == 'id' ? 'Masukkan title...' : 'Input title...'} />
                                <Textarea placeholder={locale == 'id' ? 'Katakan apapun...' : 'Say everything...'}></Textarea>
                                <Input type="text" placeholder={locale === 'id' ? '#Kategori' : "#Category"} maxW="40" />
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
