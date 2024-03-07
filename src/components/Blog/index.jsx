import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Grid, HStack, Heading, Link as LinkChakra, Text, VStack } from "@chakra-ui/react"
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react"
import { threads } from "../../utils/data"
import { Link as LinkRouter } from "react-router-dom"

const Blog = () => {
    return (
        <Container maxW={{
            base: 'full',
            sm: 'md',
            md: "container.md",
            lg: "container.lg",
        }}
            marginTop="60px"
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
                            paddingInlineEnd={{
                                lg: '40px'
                            }}
                        >
                            <CardHeader>
                                <HStack>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='Fatir Al Fatih' src='https://bit.ly/sage-adebayo' />
                                        <Box>
                                            <Heading size='sm'>Fatir Al Fatih</Heading>
                                            <Text>@fatirAlfatih</Text>
                                        </Box>
                                    </Flex>
                                </HStack>
                            </CardHeader>
                            <CardBody>
                                <HStack flexWrap="wrap" gap={4}>
                                    <LinkChakra>#{thread.category}</LinkChakra>
                                </HStack>
                                <Flex flexDirection={'column'} gap={2}>
                                    <Heading
                                        fontSize={'24px'}
                                        marginTop={3}
                                    >
                                        {thread.title}
                                    </Heading>
                                    <Text>{thread.body}</Text>
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
                                        Comment
                                    </Button>
                                </HStack>
                            </CardBody>
                            <CardFooter gap={4}>
                                <LinkRouter to>
                                    <Button
                                        colorScheme="purple"
                                    >
                                        Read More
                                    </Button>
                                </LinkRouter>
                            </CardFooter>
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
                            <Flex flexDirection='column' alignItems={'start'} gap={3}>
                                <Heading size={{
                                    md: 'md',
                                }}>Kategori Popular</Heading>
                                <VStack>
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
                                </VStack>
                            </Flex>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        </Container>
    )
}

export default Blog
