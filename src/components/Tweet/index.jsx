import { Avatar, Box, Button, Card, CardBody, Container, Flex, Grid, HStack, Heading, Link as LinkChakra, Text, VStack } from "@chakra-ui/react"
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react"
import { threads } from "../../utils/data"
import { Link as LinkRouter } from "react-router-dom"

const Tweet = () => {
    return (
        <Container maxW={{
            base: 'full',
            sm: 'md',
            md: "container.md",
            lg: "container.lg",
        }}
        >
            <Flex
                flexDirection={{
                    base: 'column',
                    md: 'row'
                }}
                justifyContent="center"
                gap={4}
            >
                <Box display={{
                    base: 'block',
                    md: 'none'
                }}>
                    <Heading>Kategori Populer</Heading>
                    <Grid
                        gridTemplateColumns="repeat(4, 1fr)"
                        gap={3}
                        marginBlock={4}
                    >
                        <Button size={'md'}>#redux</Button>
                        <Button size={'md'}>#tailwind</Button>
                        <Button size={'md'}>#laravel</Button>
                        <Button size={'md'}>#react</Button>
                    </Grid>
                </Box>
                <VStack spacing={8} >
                    {threads.map(thread => (
                        <Card key={thread.id}
                            maxW={'md'}
                        >
                            <Box padding={{
                                base: 4,
                                md: 5,
                            }}>
                                <Flex gap='4' justifyContent="space-between">
                                    <HStack spacing={4}>
                                        <Avatar name='Fatir Al Fatih' src='https://bit.ly/sage-adebayo' />
                                        <Box>
                                            <Heading size='sm'>Fatir Al Fatih</Heading>
                                            <Text>@fatirAlfatih</Text>
                                        </Box>
                                    </HStack>
                                    <Text paddingStart="20" fontSize={{
                                        base: '9px',
                                        sm: '12',
                                        md: 'sm'
                                    }} display="flex">23 menit yang lalu</Text>
                                </Flex>
                                <HStack flexWrap="wrap" marginTop={3} gap={4}>
                                    <LinkChakra>#{thread.category}</LinkChakra>
                                </HStack>
                                <Flex flexDirection={'column'}>
                                    <LinkRouter to={`/detail/${thread.id}`}>
                                        <Button
                                            variant='link'
                                            fontSize={'24px'}
                                            marginTop={3}
                                        >
                                            {thread.title}
                                        </Button>
                                    </LinkRouter>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum doloremque harum ab! Quisquam officiis mollitia, rem expedita qui deleniti architecto!</Text>
                                </Flex>
                                <HStack marginTop={2} gap={4}>
                                    <Button
                                        colorScheme="gray"
                                        variant='ghost'
                                        size='sm'
                                        leftIcon={<ThumbsUp size={20} />}
                                    >
                                        2
                                    </Button>
                                    <Button
                                        colorScheme="gray"
                                        variant='ghost'
                                        size='sm'
                                        leftIcon={<ThumbsDown size={20} />}
                                    >
                                        0
                                    </Button>
                                    <Button
                                        colorScheme="gray"
                                        variant='ghost'
                                        size='sm'
                                        leftIcon={<MessageCircle size={20} />}
                                    >
                                        2
                                    </Button>
                                </HStack>
                            </Box>
                        </Card>
                    ))}
                </VStack>

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
                            <VStack alignItems={'start'} gap={3}>
                                <Heading size={{
                                    md: 'md',
                                }}>All Topics</Heading>
                                <HStack maxW="250px" flexWrap="wrap" gap="2">
                                    <Button
                                        variant={'ghost'}
                                    >
                                        #laravel
                                    </Button>
                                    <Button
                                        variant={'ghost'}
                                    >
                                        #tailwind
                                    </Button>
                                    <Button
                                        variant={'ghost'}
                                    >
                                        #tailwind
                                    </Button>
                                    <Button
                                        variant={'ghost'}
                                    >
                                        #tailwind
                                    </Button>
                                    <Button
                                        variant={'ghost'}
                                    >
                                        #tailwind
                                    </Button>
                                </HStack>
                            </VStack>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        </Container >
    )
}

export default Tweet
