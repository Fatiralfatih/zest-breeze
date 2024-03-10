import { Button, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import { Eye, EyeOff } from 'lucide-react';
import { useContext, useState } from 'react'
import { func } from 'prop-types';
import LocaleContext from '@Features/Contexts/LocaleContext';

const LoginInput = ({ login }) => {

    const { locale } = useContext(LocaleContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        login({
            email,
            password
        })
    }

    return (
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
                    value={email}
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
                        autoComplete="current-password"
                        required
                        name="password"
                        value={password}
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
                    colorScheme="purple"
                    type="submit"
                >
                    {locale === 'id' ? 'Masuk' : 'Sign In'}
                </Button>
            </Stack>
        </form>
    )
}

LoginInput.propTypes = {
    login: func,
}

export default LoginInput
