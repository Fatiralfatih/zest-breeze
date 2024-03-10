import { Box } from "@chakra-ui/react"
import HeroSection from "@components/template/HeroSection"
import Tweets from "@components/template/Tweets"

const Home = () => {
    return (
        <>
            <Box minH={'100vh'}>
                <HeroSection />
                <Tweets />
            </Box>
        </>
    )
}

export default Home
