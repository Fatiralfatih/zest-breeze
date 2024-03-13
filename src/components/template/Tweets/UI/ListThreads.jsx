import { Box, Spinner, VStack } from '@chakra-ui/react'
import CardTweets from './CardTweets'
import { any, bool, func, string } from 'prop-types'

const ListThreads = ({ isLoading, threads, authedUser, upVotes, downVotes, clearVotes }) => {
    return (
        <VStack spacing={2}>
            {isLoading && (
                <Box
                    w={'100vh'}
                    marginTop={'50px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='lg'
                    />
                </Box>
            )}

            {threads.map(thread => (
                <CardTweets
                    key={thread.id}
                    {...thread}
                    authedUser={authedUser}
                    upVotes={upVotes}
                    downVotes={downVotes}
                    clearVotes={clearVotes}
                />
            ))}
        </VStack>
    )
}

ListThreads.propTypes = {
    isLoading: bool,
    threads: any,
    upVotes: func,
    downVotes: func,
    clearVotes: func,
    authedUser: string,
}

export default ListThreads
