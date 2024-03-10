import { useState } from 'react'

const useAddThread = ({ onAddThread }) => {
    const [input, setInput] = useState({
        title: '',
        body: '',
        category: '',
    })

    const handleTitleChange = ({ target }) => {
        setInput((prevState) => {
            return {
                ...prevState,
                title: target.value
            }
        })
    }

    const handleBodyChange = ({ target }) => {
        setInput((prevState) => {
            return {
                ...prevState,
                body: target.value
            }
        })
    }

    const handleCategoryChange = ({ target }) => {
        setInput((prevState) => {
            return {
                ...prevState,
                category: target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddThread({
            title: input.title,
            body: input.body,
            category: input.category,
        })
    }

    return { input, handleSubmit, handleTitleChange, handleBodyChange, handleCategoryChange }
}

export default useAddThread
