import { getThreadsById } from "@utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchSingleThread = () => {
    const [thread, setThread] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const fetchDetailThread = async (id) => {
        // setTimeout(async () => {
        const { data } = await getThreadsById(id);
        setThread(data);
        setIsLoading(false)
        // }, 2000);
    }

    useEffect(() => {
        fetchDetailThread(id);
    }, [id])

    return { thread, setThread, isLoading }
}

export { useFetchSingleThread }
