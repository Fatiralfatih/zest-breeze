import { Avatar, Box, Card, Flex, HStack, Heading, Text, Link as LinkChakra, Button } from "@chakra-ui/react"
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { array, number, string } from "prop-types";
import { Link as LinkRouter } from 'react-router-dom';
import { getDateHumans, removeElementHtml } from "../../../../utils";

const CardTweets = ({ id, createdAt, category, title, body, upVotesBy, downVotesBy, totalComments }) => {

    return (
        <Card
            w={{
                base: '340px',
                md: '500px',
                lg: '800px',
            }}
        >
            <Box padding={{
                base: 4,
                md: 5,
            }}>
                <Flex gap='4' justifyContent="space-between" >
                    <HStack spacing={4} maxW={'240px'} style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: 'nowrap'
                    }} >
                        <Avatar name='Fatir Al Fatih' src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <Heading
                                size='sm'
                            >
                                @fatirAlfatih</Heading>
                            <Text>@fatirAlfatih</Text>
                        </Box>
                    </HStack>
                    <Text paddingStart="20" fontSize={{
                        base: '9px',
                        sm: '12',
                        md: 'sm'
                    }} display="flex">{getDateHumans(createdAt)}</Text>
                </Flex>
                <HStack flexWrap="wrap" marginTop={3} gap={4}>
                    <LinkChakra>#{category}</LinkChakra>
                </HStack>
                <LinkRouter to={`detail/${id}`}>
                    <Text
                        variant='link'
                        fontSize={'24px'}
                        marginTop={3}
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                        _hover={{ color: 'blue' }}
                    >
                        {title}
                    </Text>
                </LinkRouter>
                <Text maxW={'xl'}
                    style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                    }}
                >{removeElementHtml(body)}
                </Text>
                <HStack marginTop={2} gap={4}>
                    <Button
                        colorScheme="gray"
                        variant='ghost'
                        size='sm'
                        leftIcon={<ThumbsUp size={20} />}
                    >
                        {upVotesBy.length}
                    </Button>
                    <Button
                        colorScheme="gray"
                        variant='ghost'
                        size='sm'
                        leftIcon={<ThumbsDown size={20} />}
                    >
                        {downVotesBy.length}
                    </Button>
                    <Button
                        colorScheme="gray"
                        variant='ghost'
                        size='sm'
                        leftIcon={<MessageCircle size={20} />}
                    >
                        {totalComments}
                    </Button>
                </HStack>
            </Box>
        </Card>
    )
}

CardTweets.propTypes = {
    id: string.isRequired,
    createdAt: string.isRequired,
    category: string.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    upVotesBy: array,
    downVotesBy: array,
    totalComments: number,
}


export default CardTweets
