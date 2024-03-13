import { fetchCreateComent } from "@utils/api";
import { useState } from "react";

const useCreateComment = (id) => {

    const [, setComment] = useState(null);

    const onCreateComment = async (content) => {
        const { data } = await fetchCreateComent({ id, content })
        setComment(data)
    }

    return { onCreateComment }
}

export default useCreateComment
