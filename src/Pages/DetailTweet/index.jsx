import Navbar from "@components/template/Navbar";
import { useFetchSingleThread } from "@Features/Hooks/useFetchSingleThread";
import CardDetailTweet from "./UI/CardDetailTweet";


const DetailTweet = () => {
    const { thread, isLoading } = useFetchSingleThread();

    return (
        <>
            <Navbar />
            <CardDetailTweet thread={thread} isLoading={isLoading} />
        </>
    )
}

export default DetailTweet
