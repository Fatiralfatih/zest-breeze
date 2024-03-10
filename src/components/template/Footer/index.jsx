import { Box, Flex, HStack, IconButton, Link as LinkChakra, Text, useColorModeValue } from "@chakra-ui/react"
import { Facebook, Github, Instagram } from "lucide-react"

const Footer = () => {
    const bgColor = useColorModeValue('gray.200', 'black')

    const tahun = new Date().getFullYear();
    return (
        <Box paddingBlock={6} bgColor={bgColor} marginTop={20}>
            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={4}>
                <HStack>
                    <LinkChakra href="https://www.facebook.com/fatir.alfatih.144/" target="_blank">
                        <IconButton
                            icon={<Facebook />}
                        />
                    </LinkChakra>
                    <LinkChakra
                        href="https://www.instagram.com/fatiralfatihh/"
                        target="_blank"
                    >
                        <IconButton
                            icon={<Instagram />}
                        />
                    </LinkChakra>
                    <LinkChakra
                        href="https://github.com/Fatiralfatih"
                        target="_blank"
                    >
                        <IconButton
                            icon={<Github />}
                        />
                    </LinkChakra>
                </HStack>
                <Text>&copy; {tahun} Copyright. Fatir Al fatih</Text>
            </Flex>
        </Box >
    )
}

export default Footer
