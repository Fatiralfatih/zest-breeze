import { Card, Flex, } from "@chakra-ui/react";
import { any, bool } from "prop-types";
import CardComents from "./CardComents";
import CardBodyTweet from "./CardBodyTweet";
import SpinnerLoading from "@components/shared/UI/SpinnerLoading";

const CardDetailTweet = ({ thread, isLoading }) => {

    const { comments } = thread;
    return (
        <Flex flexDirection={'column'} alignItems={'center'} paddingBlock={100} paddingInline={2}>
            <Card
                w={'100%'}
                maxW={{
                    base: 'md',
                    md: '2xl',
                }}
            >
                {isLoading ? (<SpinnerLoading />) : (
                    <>
                        <CardBodyTweet {...thread} isLoading={isLoading} />
                        <CardComents comments={comments} />
                    </>
                )}
            </Card>
        </Flex>
    )
}

CardDetailTweet.propTypes = {
    thread: any,
    isLoading: bool,
}

export default CardDetailTweet
