import { Button, Flex, FormLabel, Textarea, useColorModeValue } from "@chakra-ui/react"
import { func } from "prop-types";
import { useState } from "react";

const InputComment = ({ onCreateComment }) => {
    const [content, setContent] = useState('');
    const btnColor = useColorModeValue('purple', 'gray');

    const handleSubmitComment = () => {
        if (content.trim()) {
            onCreateComment(content)
        }
        setContent('')
    }

    return (
        <Flex flexDirection='column' marginTop="5" padding={4}>
            <FormLabel>Beri Comment</FormLabel>
            <Textarea
                placeholder="Masukkan komen..."
                focusBorderColor="black"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            >
            </Textarea>
            <Flex justifyContent={'end'}>
                <Button onClick={handleSubmitComment} w={'fit-content'} type='submit' marginTop={4} colorScheme={btnColor} size={{
                    base: 'md',
                    md: 'lg'
                }} >Kirim</Button>
            </Flex>
        </Flex>
    )
}

InputComment.propTypes = {
    onCreateComment: func,
}

export default InputComment
