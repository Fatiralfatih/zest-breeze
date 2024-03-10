import { getAllThreads } from "@utils/api";
import { useEffect, useState } from "react";

const useFetchThreads = () => {
    const [threads, setThreads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchThreads() {
            // setTimeout(async () => {
            const { data } = await getAllThreads();
            setThreads(data)
            setIsLoading(false)
            // }, 1000);
        }

        fetchThreads();
    }, [])

    return { threads, setThreads, isLoading };
}

export default useFetchThreads;
