import useFetchThreads from "@Features/Hooks/useFetchThreads";
import { useFetchUsers } from "@Features/Hooks/useFetchUsers";
import { Box } from "@chakra-ui/react"
import HeroSection from "@components/template/HeroSection"
import Tweets from "@components/template/Tweets";
import ListCategoryThreads from "@components/template/Tweets/UI/ListCategoryThreads";
import ListThreads from "@components/template/Tweets/UI/ListThreads";
import { fetchDownVoteThread, fetchNeutralizeVoteThread, fetchUpVoteThread } from "@utils/api";
import { object } from "prop-types";
import { useState } from "react";

const Home = ({ authedUser }) => {
    const { threads, isLoading, fetchThreads } = useFetchThreads();
    const { users } = useFetchUsers();
    const [filterByCategory, setFilterByCategory] = useState('');

    const categories = new Set(threads.map((thread) => thread.category));

    const threadLists = threads.map((thread) => ({
        ...thread,
        ownerId: users.find((user) => user.id === thread.ownerId),
    }))
    const filteredThreads = threadLists.filter(thread => thread.category === filterByCategory);

    const getUpVoteThread = async (id) => {
        await fetchUpVoteThread({ id });
        fetchThreads()
    }
    const getDownVoteThread = async (id) => {
        await fetchDownVoteThread({ id });
        fetchThreads()
    }

    const getClearVote = async (id) => {
        await fetchNeutralizeVoteThread({ id })
        fetchThreads();
    }

    return (
        <Box minH={'100vh'}>
            <HeroSection />
            <Tweets>
                {/** list thread */}
                <ListThreads
                    isLoading={isLoading}
                    threads={filterByCategory === '' && threadLists || filteredThreads}
                    authedUser={authedUser}
                    upVotes={getUpVoteThread}
                    downVotes={getDownVoteThread}
                    clearVotes={getClearVote}
                />
                {/** list thread */}

                {/** list Category tweets */}

                <ListCategoryThreads
                    categories={categories}
                    isLoading={isLoading}
                    filterByCategory={filterByCategory}
                    setFilterByCategory={setFilterByCategory}
                />

                {/** end list Category tweets */}
            </Tweets>
        </Box>
    )
}

Home.propTypes = {
    authedUser: object,
}


export default Home
