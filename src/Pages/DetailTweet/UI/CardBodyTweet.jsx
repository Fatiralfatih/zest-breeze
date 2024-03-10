import { Avatar, Box, Button, Flex, FormLabel, HStack, Heading, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { getDateHumans, removeElementHtml } from '../../../utils'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom';
import { array, object, string } from 'prop-types';

const CardBodyTweet = ({ owner, createdAt, category, title, body, upVotesBy, downVotesBy, }) => {

    const btnColor = useColorModeValue('purple', 'gray');

    return (
        <Box padding={{
            base: 4,
            md: 5,
        }}>
            {owner ? (
                <Flex gap='4' justifyContent="space-between">
                    <HStack spacing={4}>
                        <Avatar name='Fatir Al Fatih' src={owner.avatar} />
                        <Box>
                            <Heading size='sm'>{owner.name}</Heading>
                            <Text>@{owner.name}</Text>
                        </Box>
                    </HStack>
                    <Text paddingStart="20" fontSize={{
                        base: '9px',
                        sm: '12',
                        md: 'sm'
                    }} display="flex">{getDateHumans(createdAt)}</Text>
                </Flex>
            ) : (<p>Sedang loading</p>)}
            <Flex flexDirection={'column'} gap={3} marginTop={2}>
                <Link>{`#${category || 'loading'}`}</Link>
                <Heading fontSize={'2xl'}>
                    {title}
                </Heading>
                <Text>{removeElementHtml(body)}</Text>
            </Flex>
            <HStack marginTop={2} gap={4}>
                <Button
                    colorScheme="gray"
                    variant='ghost'
                    size='sm'
                    leftIcon={<ThumbsUp size={20} />}
                >
                    {[upVotesBy].length}
                </Button>
                <Button
                    colorScheme="gray"
                    variant='ghost'
                    size='sm'
                    leftIcon={<ThumbsDown size={20} />}
                >
                    {[downVotesBy].length}
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
    )
}

CardBodyTweet.propTypes = {
    owner: object,
    createdAt: string,
    category: string,
    title: string,
    body: string,
    upVotesBy: array,
    downVotesBy: array,
}

export default CardBodyTweet
