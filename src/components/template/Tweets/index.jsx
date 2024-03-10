import { Container, Flex } from "@chakra-ui/react"
import ListTweets from "./UI/ListTweets"
import CategoryTweets from "./UI/CategoryTweets";
import useFetchThreads from "@Features/Hooks/useFetchThreads";
import { useFetchUsers } from "@Features/Hooks/useFetchUsers";

const Tweets = () => {
    const { threads, isLoading } = useFetchThreads();

    const { users } = useFetchUsers();

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
                justifyContent="space-between"
                gap={4}
            >

                <ListTweets users={users} threads={threads} isLoading={isLoading} />

                <CategoryTweets threads={threads} isLoading={isLoading} />
            </Flex>
        </Container>
    )
}


export default Tweets
