import { Box, Button, Container, Flex, HStack, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AlignEndHorizontal, Fan, Languages, LogIn, Menu, MessagesSquare, Moon, Sun, XCircle } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import LocaleContext from "../../Features/Contexts/LocaleContext";

const Navbar = () => {
    const [activeMenuMobile, setActiveMenuMobile] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('whiteSmoke', 'black')

    const toggleButtonThemeMode = colorMode === 'light' ? (<Moon size={30} />) : (<Sun size={30} />)
    const toggleMenuMobile = !activeMenuMobile ? (<Menu size="35" />) : (<XCircle size="35" />)

    const { locale, toggleLocale } = useContext(LocaleContext)

    return (
        <Box position="fixed" left="0" right="0" zIndex={10} top="0" bgColor={bg}>
            <Container maxW={{
                base: 'full',
                md: "3xl",
                lg: "6xl",
            }} >
                <Flex justifyContent="space-between" paddingBlock="5" alignItems="center" paddingInline="3">
                    <Box display="flex" alignItems="center" gap="3">
                        <Fan size="35" color="blue" />
                        <Link to='/'>
                            <Heading fontSize={["25", "25", "30"]}>Zest Breeze</Heading>
                        </Link>
                    </Box>
                    <HStack gap="10" display={{
                        base: 'none',
                        md: 'flex'
                    }}>
                        <HStack gap="5">
                            <Link to="/">
                                <Text
                                    fontSize={{
                                        md: '17'
                                    }}
                                    color="gray"
                                >Tweet</Text>
                            </Link>
                            <Link>
                                <Text
                                    fontSize={{
                                        md: '17'
                                    }}
                                    color="gray"
                                    _hover="teal"
                                >LeaderBoard</Text>
                            </Link>
                            <Button variant="ghost" onClick={toggleColorMode}>
                                {toggleButtonThemeMode}
                            </Button>
                            <Button
                                onClick={toggleLocale}
                                leftIcon={<Languages />}
                                variant={'ghost'}
                            >
                                {locale === 'id' ? 'en' : 'id'}
                            </Button>
                        </HStack>
                        <Link to='/login'>
                            <Button
                                colorScheme="purple"
                                variant="solid"
                                leftIcon={<LogIn />}
                            >
                                Login
                            </Button>
                        </Link>
                    </HStack>

                    {/**mobile */}
                    <HStack
                        display={["flex", "flex", "none"]}
                    >
                        <Button variant="ghost" onClick={toggleColorMode}>
                            {toggleButtonThemeMode}
                        </Button>
                        <Button
                            padding="3"
                            variant="outline"
                            border="none"
                            onClick={() => setActiveMenuMobile(!activeMenuMobile)}
                        >
                            {toggleMenuMobile}
                        </Button>
                    </HStack>
                    {/**mobile */}
                </Flex>

                {/**Menu mobile */}
                {activeMenuMobile && (
                    <Box position="fixed" bottom="0" left="0" right="0" borderTop="1px" borderColor="gray.400" display={["block", "", "none"]} bgColor={bg}>
                        <HStack justifyContent="space-evenly" alignItems="center" marginTop="3" marginBottom="2">
                            <Link to={'/'}>
                                <Button
                                    display="flex"
                                    flexDirection="column"
                                    gap="2"
                                    height="68px"
                                    width={{
                                        base: '100px',
                                        sm: '150px'
                                    }}
                                    paddingBlock="2"
                                    fontSize="sm"
                                    variant="outline"
                                    border="none"
                                >
                                    <MessagesSquare size="25" />
                                    Tweet
                                </Button>
                            </Link>
                            <Box>
                                <Button
                                    display="flex"
                                    flexDirection="column"
                                    gap="2"
                                    height="70px"
                                    width={{
                                        base: '130px',
                                        sm: '150px',
                                    }}
                                    fontSize="sm"
                                    paddingBlock="2"
                                    variant="outline"
                                    border="none"

                                >
                                    <AlignEndHorizontal size="25" />
                                    LeaderBoard
                                </Button>
                            </Box>
                            <Link to={'/login'}>
                                <Button
                                    display="flex"
                                    flexDirection="column"
                                    height="70px"
                                    width={{
                                        base: '100px',
                                        sm: '150px'
                                    }}
                                    gap="2"
                                    fontSize="sm"
                                    variant="outline"
                                    border="none"
                                >
                                    <LogIn size="25" />
                                    Login
                                </Button>
                            </Link>
                        </HStack>
                    </Box>
                )}
                {/**end Menu mobile */}

            </Container>
        </Box>
    )
}

export default Navbar
