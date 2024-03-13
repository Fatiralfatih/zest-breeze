import {
    Avatar,
    Box,
    Card,
    Flex,
    HStack,
    Heading,
    Text,
    Link as LinkChakra,
    Button,
} from "@chakra-ui/react";
import { getDateHumans, removeElementHtml } from "@utils/index";
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { array, func, number, object, string } from "prop-types";
import { Link, Link as LinkRouter } from "react-router-dom";

const CardTweets = ({
    id,
    createdAt,
    category,
    title,
    body,
    ownerId,
    totalComments,
    upVotesBy,
    downVotesBy,
    upVotes,
    downVotes,
    clearVotes,
    authedUser,
}) => {

    const isUpVoted = upVotesBy.includes(authedUser.id)
    const isDownVoted = downVotesBy.includes(authedUser.id)

    const handleVoteUp = (event) => {
        event.stopPropagation();
        upVotes(id)
    }

    const handleDownVote = (event) => {
        event.stopPropagation();
        downVotes(id)
    }

    const handleClearVote = (event) => {
        event.stopPropagation();
        clearVotes(id)
    }

    return (
        <Card
            w={{
                base: "340px",
                md: "500px",
                lg: "640px",
            }}
        >
            <Box
                padding={{
                    base: 4,
                    md: 5,
                }}
            >
                <Flex gap="4" justifyContent="space-between">
                    <HStack
                        spacing={4}
                        maxW={"240px"}
                        style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <Avatar name="Fatir Al Fatih" src={ownerId?.avatar} />
                        <Box>
                            <Heading size="md">{ownerId?.name}</Heading>
                            <Text>{ownerId?.email}</Text>
                        </Box>
                    </HStack>
                    <Text
                        paddingStart="20"
                        fontSize={{
                            base: "9px",
                            sm: "12",
                            md: "sm",
                        }}
                        display="flex"
                    >
                        {getDateHumans(createdAt)}
                    </Text>
                </Flex>
                <HStack flexWrap="wrap" marginTop={3} gap={4}>
                    <LinkChakra>#{category}</LinkChakra>
                </HStack>
                <LinkRouter to={`detail/${id}`}>
                    <Text
                        variant="link"
                        fontSize={"24px"}
                        marginTop={3}
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                        _hover={{ color: "blue" }}
                    >
                        {title}
                    </Text>
                </LinkRouter>
                <Text
                    maxW={"xl"}
                    style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                    }}
                >
                    {removeElementHtml(body)}
                </Text>
                <HStack marginTop={2} gap={4}>
                    {isUpVoted ? (
                        <Button
                            colorScheme="blue"
                            size="sm"
                            onClick={handleClearVote}
                            aria-label="upVote"
                            leftIcon={<ThumbsUp size={20} />}
                        >
                            {upVotesBy.length}
                        </Button>
                    ) : (
                        <Button
                            colorScheme="gray"
                            size="sm"
                            onClick={handleVoteUp}
                            aria-label="upVote"
                            leftIcon={<ThumbsUp size={20} />}
                        >
                            {upVotesBy.length}
                        </Button>
                    )}
                    {isDownVoted ? (
                        <Button
                            colorScheme="blue"
                            size="sm"
                            aria-label="downVote"
                            onClick={handleClearVote}
                            leftIcon={<ThumbsDown size={20} />}
                        >
                            {downVotesBy.length}
                        </Button>
                    ) : (
                        <Button
                            colorScheme="gray"
                            size="sm"
                            aria-label="downVote"
                            onClick={handleDownVote}
                            leftIcon={<ThumbsDown size={20} />}
                        >
                            {downVotesBy.length}
                        </Button>
                    )}
                    <Link to={`detail/${id}`}>
                        <Button
                            colorScheme="gray"
                            variant="ghost"
                            size="sm"
                            leftIcon={<MessageCircle size={20} />}
                        >
                            {totalComments}
                        </Button>
                    </Link>
                </HStack>
            </Box>
        </Card>
    );
};

CardTweets.propTypes = {
    id: string.isRequired,
    createdAt: string.isRequired,
    category: string.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    upVotesBy: array,
    downVotesBy: array,
    totalComments: number,
    ownerId: object,
    getDownVoteThread: func,
    getUpVoteThread: func,
    upVotes: func,
    downVotes: func,
    clearVotes: func,
    authedUser: string,
};

export default CardTweets;
