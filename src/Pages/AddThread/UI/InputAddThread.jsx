import LocaleContext from "@Features/Contexts/LocaleContext";
import useAddInputThread from "@Features/Hooks/useAddThread";
import { Box, Button, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";
import { bool, func } from "prop-types";
import { useContext } from "react";

const InputAddThread = ({ onAddThread, isLoading }) => {

    const {
        input,
        handleSubmit,
        handleBodyChange,
        handleCategoryChange,
        handleTitleChange
    } = useAddInputThread({
        onAddThread,
    })

    const { locale } = useContext(LocaleContext);

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
                <Box>
                    <FormLabel>{locale === 'id' ? 'Judul' : 'Title'}</FormLabel>
                    <Input
                        name="title"
                        placeholder={locale === 'id' ? "Masukkan Tittle..." : 'Input Title...'}
                        required
                        value={input.title}
                        onChange={handleTitleChange}
                    />
                </Box>
                <Box>
                    <FormLabel>Body</FormLabel>
                    <Textarea
                        name="body"
                        placeholder="Masukkan apa aja..."
                        required
                        value={input.body}
                        onChange={handleBodyChange}
                    />
                </Box>
                <Box>
                    <FormLabel>Category</FormLabel>
                    <Input
                        name="category"
                        placeholder="#category"
                        required
                        value={input.category}
                        onChange={handleCategoryChange}
                    />
                </Box>
                {isLoading ? (
                    <Button
                        isLoading
                        loadingText='submitting'
                    >Submit</Button>
                ) : (
                    <Button
                        type="submit"
                        marginTop={4}
                    >Tambah</Button>
                )}
            </Stack>
        </form>
    )
}

InputAddThread.propTypes = {
    onAddThread: func,
    isLoading: bool,
}

export default InputAddThread
