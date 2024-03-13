import LocaleContext from '@Features/Contexts/LocaleContext';
import useFetchLeaderboards from '@Features/Hooks/useFetchLeaderboards';
import { Avatar, Box, Card, CardBody, CardHeader, Flex, HStack, Heading, Spinner, Stack, Text, } from '@chakra-ui/react'
import { useContext } from 'react'

const LeaderBoards = () => {
    const { dataLeaderboards, isLoading } = useFetchLeaderboards()
    const { locale } = useContext(LocaleContext);

    return (
        <Box minH={'100vh'} paddingTop={100} display={'flex'} justifyContent={'center'}>
            <Card w={{
                base: '400px',
                md: '500px',
                lg: '800px'
            }} padding={4}>
                <CardHeader>
                    <Heading
                        textAlign={'start'}
                        fontSize={'xx-large'}
                    >
                        {locale === 'id' ? 'Klasemen Pengguna Aktif' : 'Rank Users Active'}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <HStack justifyContent={'space-between'} marginBottom={5}>
                        <Text fontWeight={700} fontSize={'x-large'}>{locale === 'id' ? 'Pengguna' : 'Users'}</Text>
                        <Text fontSize={'x-large'}>{locale === 'id' ? 'skor' : 'score'}</Text>
                    </HStack>

                    {isLoading && (
                        <Stack justifyContent={'center'} marginTop={'50px'} alignItems={'center'}>
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Stack>
                    )}
                    <Flex flexDirection={'column'} gap={6}>
                        {dataLeaderboards.map(leaderboard => (
                            <HStack key={leaderboard.user.id} justifyContent={'space-between'}>
                                <Flex alignItems={'center'} gap={4}>
                                    <Avatar name={leaderboard.user.name} src={leaderboard.user.avatar} />
                                    <Text fontSize={'x-large'}>{leaderboard.user.name}</Text>
                                </Flex>
                                <Heading fontSize={'x-large'}>{leaderboard.score}</Heading>
                            </HStack>
                        ))}
                    </Flex>

                </CardBody>
            </Card>
        </Box >
    )
}

export default LeaderBoards
