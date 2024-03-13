import LocaleContext from "@Features/Contexts/LocaleContext"
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { Eye, EyeOff, Rocket } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { func } from "prop-types"
import { fetchUserLogin } from "@utils/api"
import useLoginInput from "@Features/Hooks/useLoginInput"

const Login = ({ loginSuccess }) => {

    const { locale } = useContext(LocaleContext);
    const textColor = useColorModeValue('black', 'white')
    const [showPassword, setShowPassword] = useState(false)

    const onLogin = async ({ email, password }) => {
        const { data } = await fetchUserLogin({ email, password });
        loginSuccess(data);
    }
    const {
        value,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit }
        = useLoginInput({
            onLogin
        })


    return (
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

                <form onSubmit={handleSubmit}>
                    <Stack marginTop={5} spacing={4}>
                        <Input
                            size="lg"
                            width={{
                                base: 'initial',
                                md: '350px'
                            }}
                            placeholder={locale === 'id' ? 'Masukkan email...' : 'Enter your email...'}
                            variant={'filled'}
                            focusBorderColor="black"
                            _hover={'black'}
                            required
                            name="email"
                            value={value.email}
                            onChange={handleEmailChange}
                        />

                        <InputGroup size={'lg'}>
                            <Input
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder={locale === 'id' ? 'Masukkan password...' : 'Enter your password...'}
                                variant={'filled'}
                                focusBorderColor="black"
                                _hover={'black'}
                                autoComplete="current-password"
                                required
                                name="password"
                                value={value.password}
                                onChange={handlePasswordChange}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button
                                    h='1.75rem'
                                    size='sm'
                                    variant={'ghost'}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (<EyeOff />) : (<Eye />)}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        <Button
                            colorScheme="purple"
                            type="submit"
                        >
                            {locale === 'id' ? 'Masuk' : 'Sign In'}
                        </Button>
                    </Stack>
                </form>
            </Flex>
        </Box>
    )
}

Login.propTypes = {
    loginSuccess: func,
}

export default Login
