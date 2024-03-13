import { Avatar, Box, Button, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom';
import { array, func, object, string } from 'prop-types';
import { getDateHumans, removeElementHtml } from '@utils/index';

const CardBodyTweet = ({ upVote, authedUser, clearVote, downVote, id, owner, createdAt, category, title, body, upVotesBy, downVotesBy }) => {
    const handleUpVoteClick = (event) => {
        event.stopPropagation();
        upVote(id)
    }

    const isVoteUp = upVotesBy.find(index => index === authedUser.id)
    const isVoteDown = downVotesBy.find(index => index === authedUser.id)

    const handleDownVoteClick = (event) => {
        event.stopPropagation();
        downVote(id)
    }

    const handleClearVoteClick = (event) => {
        event.stopPropagation();
        clearVote(id)
    }


    return (
        <Box padding={{
            base: 4,
            md: 5,
        }}>
            {owner && (
                <Flex gap='4' justifyContent="space-between">
                    <HStack spacing={4}>
                        <Avatar name='Fatir Al Fatih' src={owner.avatar} />
                        <Box>
                            <Heading size='sm'>{owner.name}</Heading>
                            <Text fontSize={'sm'}>@{owner.name}</Text>
                        </Box>
                    </HStack>
                    <Text paddingStart="20" fontSize={{
                        base: '11px',
                        md: 'sm'
                    }} display="flex">{getDateHumans(createdAt)}</Text>
                </Flex>)}
            <Flex flexDirection={'column'} gap={3} marginTop={2}>
                <Link style={{ width: 'fit-content' }}>{`#${category || ''}`}</Link>
                <Heading fontSize={'2xl'}>
                    {title}
                </Heading>
                <Text maxW={'md'}>{removeElementHtml(body)}</Text>
            </Flex>
            <HStack marginTop={2} gap={4}>
                {isVoteUp ? (
                    <Button
                        colorScheme="blue"
                        size='sm'
                        onClick={handleClearVoteClick}
                        leftIcon={<ThumbsUp size={20} />}
                    >
                        {upVotesBy.length}
                    </Button>
                ) : (
                    <Button
                        colorScheme="gray"
                        size='sm'
                        onClick={handleUpVoteClick}
                        leftIcon={<ThumbsUp size={20} />}
                    >
                        {upVotesBy.length}
                    </Button>
                )}
                {isVoteDown ? (
                    <Button
                        colorScheme="blue"
                        size='sm'
                        onClick={handleClearVoteClick}
                        leftIcon={<ThumbsDown size={20} />}
                    >
                        {downVotesBy.length}
                    </Button>
                ) : (
                    <Button
                        colorScheme="gray"
                        size='sm'
                        onClick={handleDownVoteClick}
                        leftIcon={<ThumbsDown size={20} />}
                    >
                        {downVotesBy.length}
                    </Button>
                )}
            </HStack>
        </Box>
    )
}

CardBodyTweet.propTypes = {
    id: string.isRequired,
    owner: object,
    createdAt: string,
    category: string,
    title: string,
    body: string,
    upVotesBy: array,
    downVotesBy: array,
    upVote: func,
    downVote: func,
    clearVote: func,
    authedUser: object,
}

export default CardBodyTweet
