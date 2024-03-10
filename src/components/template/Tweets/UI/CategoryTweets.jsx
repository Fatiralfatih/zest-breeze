import { Box, Button, Card, CardBody, HStack, Heading, VStack } from '@chakra-ui/react'
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
                    <VStack alignItems={'start'} gap={3} w={'200px'}>
                        <Heading size={{
                            md: 'md',
                        }}>All Category</Heading>
                        {isLoading ? (<p>Sedang loading</p>) : (
                            <HStack maxW="xl" flexWrap="wrap" gap="2">
                                {threads.map((thread) => (
                                    <Button
                                        key={thread.id}
                                        variant={'ghost'}
                                    >
                                        #{thread.category}
                                    </Button>
                                ))}
                            </HStack>
                        )}
                    </VStack>
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
