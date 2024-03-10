import { Card, Flex } from "@chakra-ui/react";
import { any } from "prop-types";
import CardComents from "./CardComents";
import CardBodyTweet from "./CardBodyTweet";

const CardDetailTweet = ({ thread }) => {

    return (
        <Flex flexDirection={'column'} alignItems={'center'} paddingBlock={100} paddingInline={2}>
            <Card
                w={'100%'}
                maxW={{
                    base: 'md',
                    md: '2xl',
                }}
            >
                <CardBodyTweet {...thread} />
                <CardComents thread={thread} />
            </Card>
        </Flex>
    )
}

CardDetailTweet.propTypes = {
    thread: any,
}

export default CardDetailTweet
