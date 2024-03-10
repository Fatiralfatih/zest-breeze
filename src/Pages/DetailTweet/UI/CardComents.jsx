import { Avatar, Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { any } from "prop-types"
import { getDateHumans, removeElementHtml } from "../../../utils"

const CardComents = ({ thread }) => {

    const { comments } = thread

    return (
        <Box padding={{
            base: 4,
            md: 5,
        }}>
            <Heading size={'md'}>Comment</Heading>
            {comments && comments.map((comment) => (
                <Flex key={comment.id} justifyContent={'space-between'} marginTop={4}>
                    <Flex flexDirection={'column'} gap={4}>
                        <HStack gap={3}>
                            <Avatar name={comment.owner.name} size={'sm'} src={comment.owner.avatar} />
                            <Text fontWeight={'bold'}>{comment.owner.name}</Text>
                        </HStack>
                        <Text fontWeight={400}>{removeElementHtml(comment.content)}</Text>
                        <HStack>
                            <Button
                                leftIcon={<ThumbsUp />}
                                variant={'ghost'}
                            >
                                {[comment.upVotesBy].length}
                            </Button>
                            <Button
                                leftIcon={<ThumbsDown />}
                                variant={'ghost'}
                            >
                                {[comment.downVotesBy].length}
                            </Button>
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
    thread: any
}

export default CardComents
