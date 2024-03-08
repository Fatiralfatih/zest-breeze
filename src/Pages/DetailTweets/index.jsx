import { Avatar, Box, Button, Card, Flex, FormLabel, HStack, Heading, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar";

const DetailTweets = () => {

    const btnColor = useColorModeValue('purple', 'gray');
    return (
        <>
            <Navbar />
            <Flex flexDirection={'column'} alignItems={'center'} paddingBlock={100} paddingInline={2}>
                <Card
                    maxW={{
                        base: 'md',
                        md: '2xl',
                    }}
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
                            <Link>#laravel</Link>
                        </HStack>
                        <Flex flexDirection={'column'}>
                            <Heading>
                                ini adalah title 1
                            </Heading>
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
                        </HStack>
                        <form>
                            <Flex flexDirection='column' marginTop="5">
                                <FormLabel>Beri Comment</FormLabel>
                                <Textarea placeholder="Masukkan komen..." focusBorderColor="black"></Textarea>
                            </Flex>
                            <Flex justifyContent={'end'}>
                                <Button marginTop={4} colorScheme={btnColor} size={{
                                    base: 'md',
                                    md: 'lg'

                                }} >Kirim</Button>
                            </Flex>
                        </form>
                    </Box>
                    <Box padding={{
                        base: 4,
                        md: 5,
                    }}>
                        <Heading size={'md'}>Comment (2)</Heading>
                        <Flex justifyContent={'space-between'} marginTop={4}>
                            <Flex flexDirection={'column'} gap={4}>
                                <HStack gap={3}>
                                    <Avatar name='Fatir Al Fatih' size={'sm'} src='https://bit.ly/sage-adebayo' />
                                    <Text fontWeight={'bold'}>fatirAlfatih</Text>
                                </HStack>
                                <Text fontWeight={400}>ini entar jadikan komentar ya fatirr....</Text>
                                <HStack>
                                    <Button
                                        leftIcon={<ThumbsUp />}
                                        variant={'ghost'}
                                    >
                                        10
                                    </Button>
                                    <Button
                                        leftIcon={<ThumbsDown />}
                                        variant={'ghost'}
                                    >
                                        10
                                    </Button>
                                </HStack>
                            </Flex>
                            <Text fontSize={{
                                base: 'xs',
                                md: 'md'
                            }}>12 menit yang lalu</Text>
                        </Flex>
                    </Box>
                </Card>
            </Flex>
        </>
    )
}

export default DetailTweets
