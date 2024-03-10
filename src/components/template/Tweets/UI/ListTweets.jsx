import { array, bool } from "prop-types";
import CardTweets from "./CardTweets";
import { Box, Spinner, VStack } from "@chakra-ui/react";

const ListTweets = ({ threads, isLoading, users }) => {

    return (
        <VStack spacing={2}>
            {isLoading ? (
                <Box w={'100vh'} marginTop={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='lg'
                    />
                </Box>
            ) : (
                threads.map((thread) => (
                    <CardTweets key={thread.id} {...thread} users={users} />
                ))
            )}
        </VStack>
    )
}

ListTweets.propTypes = {
    threads: array,
    isLoading: bool,
    users: array,
}

export default ListTweets
