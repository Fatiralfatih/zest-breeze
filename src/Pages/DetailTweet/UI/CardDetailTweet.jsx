import { Card, Flex, } from "@chakra-ui/react";
import { element } from "prop-types";

const CardDetailTweet = ({ children }) => {

    return (
        <Flex flexDirection={'column'} alignItems={'center'} paddingBlock={100} paddingInline={2}>
            <Card
                w={'100%'}
                maxW={{
                    base: 'md',
                    md: '2xl',
                }}
            >
                {children}
            </Card>
        </Flex>
    )
}

CardDetailTweet.propTypes = {
    children: element,
}

export default CardDetailTweet
