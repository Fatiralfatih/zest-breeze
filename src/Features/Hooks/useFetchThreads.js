import { useEffect, useState } from "react";
import { getAllThreads } from "../../utils/api";

const useFetchThreads = () => {
    const [threads, setThreads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchThreads() {
            const { data } = await getAllThreads();
            setThreads(data)
            setIsLoading(false)
        }

        fetchThreads();
    }, [])

    return { threads, setThreads, isLoading };
}

export default useFetchThreads;
