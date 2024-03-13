import { Avatar, Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react"
import { getDateHumans, removeElementHtml } from "@utils/index"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { any, func, object } from "prop-types"

const CardComents = ({ authedUser, comments, upVoteComments, downVoteComments, clearVoteComments }) => {

    // const isVoteUpComment = comments.filter(comment => comment.upVotesBy.includes(authedUser.id))
    const handleUpVoteCommentClick = (commentId) => {
        upVoteComments({ commentId })
    }

    const handleDownVoteCommentClick = (commentId) => {
        downVoteComments({ commentId })
    }

    const handleClearVoteComentClick = (commentId) => {
        clearVoteComments({ commentId })
    }

    return (
        <Box padding={{
            base: 4,
            md: 5,
        }}>
            <Heading size={'md'}>Comment</Heading>
            {comments?.map((comment) => (
                <Flex key={comment.id} justifyContent={'space-between'} marginTop={4}>
                    <Flex flexDirection={'column'} gap={4}>
                        <HStack gap={3}>
                            <Avatar name={comment.owner.name} size={'sm'} src={comment.owner.avatar} />
                            <Text fontWeight={'bold'}>{comment.owner.name}</Text>
                        </HStack>
                        <Text fontWeight={400} maxW={'md'}>{removeElementHtml(comment.content)}</Text>
                        <HStack>
                            {comment.upVotesBy.includes(authedUser.id) ? (
                                <Button
                                    leftIcon={<ThumbsUp />}
                                    colorScheme={'blue'}
                                    size='sm'
                                    onClick={() => handleClearVoteComentClick(comment.id)}
                                >
                                    {comment.upVotesBy.length}
                                </Button>
                            ) : (
                                <Button
                                    leftIcon={<ThumbsUp />}
                                    colorScheme={'gray'}
                                    size='sm'
                                    onClick={() => handleUpVoteCommentClick(comment.id)}
                                >
                                    {comment.upVotesBy.length}
                                </Button>
                            )}
                            {comment.downVotesBy.includes(authedUser.id) ? (
                                <Button
                                    leftIcon={<ThumbsDown />}
                                    colorScheme={'blue'}
                                    size='sm'
                                    onClick={() => handleClearVoteComentClick(comment.id)}
                                >
                                    {comment.downVotesBy.length}
                                </Button>
                            ) : (
                                <Button
                                    leftIcon={<ThumbsDown />}
                                    colorScheme={'gray'}
                                    size='sm'
                                    onClick={() => handleDownVoteCommentClick(comment.id)}
                                >
                                    {comment.downVotesBy.length}
                                </Button>
                            )}
                        </HStack>
                    </Flex>
                    <Text fontSize={{
                        base: 'xs',
                        md: 'md'
                    }}>{getDateHumans(comment.createdAt)}</Text>
                </Flex>
            ))}
        </Box>
    )
}

CardComents.propTypes = {
    comments: any,
    upVoteComments: func,
    downVoteComments: func,
    clearVoteComments: func,
    authedUser: object,
}

export default CardComents
