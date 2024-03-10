
import { array, bool } from "prop-types";
import CardTweets from "./CardTweets";
import { VStack } from "@chakra-ui/react";

const ListTweets = ({ threads, isLoading }) => {

    return (
        <VStack spacing={2}>
            {isLoading ? (<p>sedang loding</p>) : (
                threads.map((thread => (
                    <CardTweets key={thread.id} {...thread} />
                )))
            )}
        </VStack>
    )
}

ListTweets.propTypes = {
    threads: array,
    isLoading: bool.isRequired,
}

export default ListTweets
