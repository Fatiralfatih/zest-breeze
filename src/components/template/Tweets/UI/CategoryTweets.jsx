import { Box, Button, Card, CardBody, Flex, Grid, Heading, Spinner } from '@chakra-ui/react'
import { array, bool } from 'prop-types'

const CategoryTweets = ({ threads, isLoading }) => {
    return (
        <Box
            display={{
                base: 'none',
                md: 'block',
            }}
        >
            <Card
                position={'sticky'}
                top={{
                    md: '90px',
                    lg: '105px'
                }}
            >
                <CardBody>
                    <Flex flexDirection={'row'} wrap={'wrap'} alignItems={'start'} gap={3} w={'100%'}>
                        <Heading size={{
                            md: 'md',
                        }}>All Category</Heading>
                        {isLoading ? (<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='md'
                        />) : (
                            <Grid templateColumns='repeat(2, 1fr)' gap="4" w={'100%'}  >
                                {threads.map((thread) => (
                                    <Button
                                        key={thread.id}
                                        variant={'ghost'}
                                        size={'sm'}
                                    >
                                        #{thread.category}
                                    </Button>
                                ))}
                            </Grid>
                        )}
                    </Flex>
                </CardBody>
            </Card>
        </Box>
    )
}

CategoryTweets.propTypes = {
    threads: array,
    isLoading: bool.isRequired,
}

export default CategoryTweets
