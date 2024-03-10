import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getUserLogged, putAccessToken } from '@utils/api';

const useAuthenticated = () => {
    const navigate = useNavigate();
    const [authedUser, setAuthedUser] = useState(null);
    const [initilize, setInitilize] = useState(true)

    useEffect(() => {
        async function fetchUserLogged() {
            const { data } = await getUserLogged();
            setAuthedUser(data);
            setInitilize(false)
        }
        fetchUserLogged();
    }, [])

    const onLoginSuccess = async (accessToken) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
        navigate('/')
    }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('')
        navigate('/*')
    }

    return { authedUser, initilize, onLoginSuccess, onLogout }
}

export { useAuthenticated }
