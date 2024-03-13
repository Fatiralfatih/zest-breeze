import { Container, Flex } from "@chakra-ui/react"
import { any, array, element, } from "prop-types";

const Tweets = ({ children }) => {

    return (
        <Container
            maxW={{
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

                {children}
            </Flex>

        </Container>
    )

}

Tweets.propTypes = {
    children: any,
}


export default Tweets
