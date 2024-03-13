import CardDetailTweet from "./UI/CardDetailTweet";
import { object } from "prop-types";
import CardBodyTweet from "./UI/CardBodyTweet";
import CardComents from "./UI/CardComents";
import SkeletonLoading from "@components/shared/SkeletonLoading";
import { useParams } from "react-router-dom";
import InputComment from "./UI/InputComment";
import { useEffect, useState } from "react";
import { fetchCreateComent, fetchDownVoteCommentThread, fetchDownVoteThread, fetchNeutralizeVoteCommentThread, fetchNeutralizeVoteThread, fetchUpVoteCommentThread, fetchUpVoteThread, getThreadsById } from "@utils/api";


const DetailThread = ({ authedUser }) => {
    const { id } = useParams();
    const [thread, setThread] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const onCreateComment = async (content) => {
        await fetchCreateComent({ id, content })
        fetchDetailThread(id)
    }

    const fetchDetailThread = async (id) => {
        try {
            const { data } = await getThreadsById({ id });
            setThread(data);
        } catch (error) {
            console.error('error fetching data thread:', error);
            setIsLoading(true);
        } finally {
            setIsLoading(false)
        }
    }

    const getVoteUpThread = async () => {
        await fetchUpVoteThread({ id })
        await fetchDetailThread(id)
    }

    const getVoteDownThread = async () => {
        await fetchDownVoteThread({ id })
        await fetchDetailThread(id)
    }

    const getClearVoteThread = async () => {
        const { error } = await fetchNeutralizeVoteThread({ id })
        if (error) {
            alert('kamu banyak dosa!')
            return;
        }
        await fetchDetailThread(id)
    }

    const getUpVoteCommentThread = async ({ commentId }) => {

        const { error } = await fetchUpVoteCommentThread({ threadId: id, commentId })
        if (error) {
            alert('kamu banyak dosa!')
            return;
        }

        await fetchDetailThread(id);
    }
    const getDownVoteCommentThread = async ({ commentId }) => {
        await fetchDownVoteCommentThread({ threadId: id, commentId })
        await fetchDetailThread(id);
    }
    const getClearVoteCommentThread = async ({ commentId }) => {
        await fetchNeutralizeVoteCommentThread({ threadId: id, commentId })
        await fetchDetailThread(id);
    }

    useEffect(() => {
        fetchDetailThread(id);
    }, [id])

    return (
        <CardDetailTweet>
            {isLoading ? (<SkeletonLoading />) : (
                <>
                    <CardBodyTweet
                        {...thread}
                        authedUser={authedUser}
                        upVote={getVoteUpThread}
                        downVote={getVoteDownThread}
                        clearVote={getClearVoteThread}
                    />
                    <InputComment
                        onCreateComment={onCreateComment} />
                    <CardComents
                        comments={thread.comments}
                        upVoteComments={getUpVoteCommentThread}
                        downVoteComments={getDownVoteCommentThread}
                        clearVoteComments={getClearVoteCommentThread}
                        authedUser={authedUser}
                    />
                </>
            )}
        </CardDetailTweet>
    )
}

DetailThread.propTypes = {
    authedUser: object,
}

export default DetailThread
