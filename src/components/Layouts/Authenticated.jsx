import { Box, Flex } from "@chakra-ui/react"
import { any } from "prop-types"

const Authenticated = ({ children }) => {
    return (
        <Box
            display={'flex'}
            minH={'100vh'}
            justifyContent={'center'}
        >
            <Flex marginTop={200} flexDirection={'column'} alignItems={'center'}>
                {children}
            </Flex>
        </Box>
    )
}

Authenticated.propTypes = {
    children: any,
}

export default Authenticated
