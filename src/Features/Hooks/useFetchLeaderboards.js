import { fetchLeaderboards } from "@utils/api";
import { useEffect, useState } from "react";


const useFetchLeaderboards = () => {
    const [dataLeaderboards, setDataLeaderboards] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getLeaderBoards = async () => {

        try {
            const { data } = await fetchLeaderboards();
            setDataLeaderboards(data)
        } catch (error) {
            console.log(error.message);
            setIsLoading(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getLeaderBoards();
    }, [])

    return { dataLeaderboards, isLoading }
}

export default useFetchLeaderboards;
