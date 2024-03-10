import LocaleContext from "@Features/Contexts/LocaleContext"
import { Box, Button, Flex, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { Rocket } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import LoginInput from "./LoginInput"
import { func } from "prop-types"
import { fetchUserLogin } from "@utils/api"

const Login = ({ loginSuccess }) => {

    const { locale } = useContext(LocaleContext);
    const textColor = useColorModeValue('black', 'white')

    const onLogin = async ({ email, password }) => {
        const { data } = await fetchUserLogin({ email, password });
        loginSuccess(data);
    }

    return (
        <>
            <Box
                display={'flex'}
                minH={'100vh'}
                justifyContent={'center'}
            >
                <Flex marginTop={200} flexDirection={'column'} alignItems={'center'}>
                    <VStack gap={5}>
                        <Heading
                            size={'lg'}
                            display={'flex'}
                            gap={2}
                            alignItems={'center'}
                        >
                            {locale === 'id' ? 'Masuk ke' : 'Sign In to'}
                            <Link to='/'>
                                <Button size={'xl'} color={textColor} variant='link'>
                                    Breeze
                                </Button>
                            </Link>
                            <Box as="span">
                                <Rocket size={30} />
                            </Box>
                        </Heading>
                        <Text
                            display={'flex'}
                            gap={2}
                            fontWeight={200}
                            color={'gray'}
                        >
                            {locale === 'id' ? 'Tidak ada akun?' : 'No have account?'}
                            <Link to='/register'>
                                <Button
                                    as="span"
                                    fontWeight={700}
                                    variant={'link'}
                                >
                                    {locale === 'id' ? 'Daftar' : 'Sign Up'}
                                </Button>
                            </Link>
                        </Text>
                    </VStack>
                    <LoginInput login={onLogin} />
                </Flex>
            </Box>
        </>
    )
}

Login.propTypes = {
    loginSuccess: func,
}

export default Login
