import { Box, Button, Grid, Heading } from "@chakra-ui/react"
import { array, bool } from "prop-types"

const CategoryTweetsMobile = ({ threads, isLoading }) => {


    return (
        <Box display={{
            base: 'block',
            md: 'none'
        }}>
            <Heading>Kategori Populer</Heading>
            {isLoading ? (<p>Seadng loading</p>) : (
                <Grid
                    gridTemplateColumns="repeat(4, 1fr)"
                    gap={3}
                    marginBlock={4}
                >
                    {threads.map(thread => (
                        <Button key={thread.id} size={'md'}>#{thread.category}</Button>
                    ))}
                </Grid>
            )}
        </Box>
    )
}

CategoryTweetsMobile.propTypes = {
    threads: array,
    isLoading: bool.isRequired,
}

export default CategoryTweetsMobile
