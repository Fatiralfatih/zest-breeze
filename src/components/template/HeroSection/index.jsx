import LocaleContext from "@Features/Contexts/LocaleContext";
import { Box, Button, Container, Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom";

const HeroSection = () => {

    const { locale } = useContext(LocaleContext);
    const btnColor = useColorModeValue('purple', 'gray');

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
                        the threads breeze
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
                    <Link to={'add/thread'}>
                        <Button
                            colorScheme={btnColor}
                        >
                            {locale === 'id' ? 'Buat imaginasimu sekarang !!' : 'Create your imaginations now !!'}
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Box>
    )
}

export default HeroSection
