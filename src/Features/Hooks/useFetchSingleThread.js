import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThreadsById } from "../../utils/api";

const useFetchSingleThread = () => {
    const [thread, setThread] = useState([])
    const { id } = useParams();

    const fetchDetailThread = async (id) => {
        const { data } = await getThreadsById(id);
        setThread(data);
    }

    useEffect(() => {
        fetchDetailThread(id);
    }, [id])

    return { thread, setThread }
}

export { useFetchSingleThread }
