import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

const HeroSection = () => {
    return (
        <Box marginTop="130px">
            <Container maxW={{
                base: 'full',
                sm: 'md',
                md: "container.md",
                lg: "container.lg",
            }}>
                <VStack textAlign="center">
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
                        the blog breeze
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
                    <Text
                        fontSize={ {
                            base: 'normal',
                            md: '15px',
                            lg: '17px'
                        }}
                    >
                        Guides, product updates, case studies and research from the Senja cofounders.
                    </Text>
                </VStack>
            </Container>
        </Box>
    )
}

export default HeroSection
