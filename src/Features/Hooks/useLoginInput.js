import { useState } from "react"

const useLoginInput = ({ onLogin }) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({
            email: value.email,
            password: value.password
        })
    }

    const handleEmailChange = (e) => {
        setValue((prevState) => {
            return {
                ...prevState,
                email: e.target.value
            }
        })
    }

    const handlePasswordChange = (e) => {
        setValue((prevState) => {
            return {
                ...prevState,
                password: e.target.value
            }
        })
    }

    return { value, handleEmailChange, handlePasswordChange, handleSubmit }
}

export default useLoginInput
