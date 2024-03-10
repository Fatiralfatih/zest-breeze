import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { fetchUserRegistered } from '@utils/api';

const useRegisterUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleFormChange = async (event) => {
        event.preventDefault();
        const { error } = await fetchUserRegistered({
            name,
            email,
            password,
        });

        if (!error) {
            navigate('/*')
        }
    }

    return { setName, setEmail, setPassword, handleFormChange }
}

export { useRegisterUser }
