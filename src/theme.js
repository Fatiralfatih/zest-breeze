import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    fonts: {
        heading: `Bricolage Grotesque, sans-serif`,
    },
    config
})

export default theme