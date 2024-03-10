import { Container, Flex } from "@chakra-ui/react"
import ListTweets from "./UI/ListTweets"
import useFetchThreads from "../../../Features/Hooks/useFetchThreads"
import CategoryTweets from "./UI/CategoryTweets";
import CategoryTweetsMobile from "./UI/CategoryTweetsMobile";

const Tweets = () => {
    const { threads, isLoading } = useFetchThreads();

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
                {/**mobile */}
                <CategoryTweetsMobile threads={threads} isLoading={isLoading} />
                {/**mobile */}

                <ListTweets threads={threads} isLoading={isLoading} />

                <CategoryTweets threads={threads} isLoading={isLoading} />
            </Flex>
        </Container>
    )
}



export default Tweets
