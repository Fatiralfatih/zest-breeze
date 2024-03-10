import { Box } from "@chakra-ui/react"
import Navbar from "../../components/template/Navbar"
import HeroSection from "../../components/template/HeroSection"
import Tweets from "../../components/template/Tweets"
import Footer from "../../components/template/Footer"

const Home = () => {
    return (
        <>
            <Navbar />
            <Box minH={'100vh'}>
                <HeroSection />
                <Tweets />
            </Box>
            <Footer />
        </>
    )
}

export default Home
