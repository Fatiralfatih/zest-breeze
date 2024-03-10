import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { Eye, EyeOff, Rocket } from "lucide-react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LocaleContext from "../../Features/Contexts/LocaleContext"
import Navbar from "../../components/template/Navbar"

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const textColor = useColorModeValue('black', 'white')

    const { locale } = useContext(LocaleContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const fetchRegisteredUser = async ({ email, name, password }) => {
        const response = await fetch('https://forum-api.dicoding.dev/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })
        const responseJson = await response.json();
        if (responseJson.status !== 'success') {
            alert(responseJson.message)
            return { error: true }
        }

        return { error: false };
    }

    const handleFormChange = async (event) => {
        event.preventDefault();
        const { error } = await fetchRegisteredUser({
            name,
            email,
            password,
        });

        if (!error) {
            navigate('/*')
        }
    }



    return (
        <>
            <Navbar />
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
                            {locale === 'id' ? 'Daftar ke' : ' Sign Up to'}
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
                            {locale === 'id' ? 'Sudah Mempunyai Akun?' : 'Already have account?'}
                            <Link to='/login'>
                                <Button
                                    as="span"
                                    fontWeight={700}
                                    variant={'link'}
                                >
                                    {locale === 'id' ? 'Masuk' : 'Sign In'}
                                </Button>
                            </Link>
                        </Text>
                    </VStack>
                    <form onSubmit={handleFormChange}>
                        <Stack marginTop={5} spacing={4}>
                            <Input
                                type="text"
                                size="lg"
                                width={{
                                    base: 'initial',
                                    md: '350px'
                                }}
                                placeholder={locale === 'id' ? 'Masukkan nama...' : 'Enter your name...'}
                                variant={'filled'}
                                focusBorderColor="black"
                                _hover={'black'}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                size="lg"
                                type="email"
                                width={{
                                    base: 'initial',
                                    md: '350px'
                                }}
                                placeholder={locale === 'id' ? 'Masukkan email...' : 'Enter your email...'}
                                variant={'filled'}
                                focusBorderColor="black"
                                _hover={'black'}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <InputGroup size={'lg'}>
                                <Input
                                    pr='4.5rem'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={locale === 'id' ? 'Masukkan password...' : 'Enter your password...'}
                                    variant={'filled'}
                                    focusBorderColor="black"
                                    _hover={'black'}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
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
                                type="submit"
                                colorScheme="purple"
                            >
                                {locale === 'id' ? 'Daftar' : 'Sign Up'}
                            </Button>
                        </Stack>
                    </form>
                </Flex>
            </Box>
        </>
    )
}

export default Register
