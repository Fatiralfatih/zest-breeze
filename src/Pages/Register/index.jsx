
import Authenticated from "@components/Layouts/Authenticated"
import { Box, Button, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack, useColorModeValue, } from "@chakra-ui/react"
import { Eye, EyeOff, Rocket } from "lucide-react"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import LocaleContext from "@Features/Contexts/LocaleContext"
import { useRegisterUser } from "@Features/Hooks/useRegister"

const Register = () => {
    const { locale } = useContext(LocaleContext)
    const [showPassword, setShowPassword] = useState(false)
    const { handleFormChange, setEmail, setName, setPassword } = useRegisterUser();

    const textColor = useColorModeValue('black', 'white')

    return (
        <Authenticated>
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
        </Authenticated>
    )
}

export default Register
