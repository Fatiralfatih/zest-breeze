import { getAllThreads } from "@utils/api";
import { useEffect, useState } from "react";

const useFetchThreads = () => {
    const [threads, setThreads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchThreads() {
        const { data } = await getAllThreads();
        setThreads(data)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchThreads();
    }, [])

    return { threads, setThreads, isLoading, fetchThreads };
}

export default useFetchThreads;
