import Navbar from "../../components/template/Navbar";
import Footer from "../../components/template/Footer";
import CardDetailTweet from "./UI/CardDetailTweet";
import { useFetchSingleThread } from "../../Features/Hooks/useFetchSingleThread";

const DetailTweet = () => {
    const { thread } = useFetchSingleThread();
    
    return (
        <>
            <Navbar />
            <CardDetailTweet thread={thread} />
            <Footer />
        </>
    )
}

export default DetailTweet
