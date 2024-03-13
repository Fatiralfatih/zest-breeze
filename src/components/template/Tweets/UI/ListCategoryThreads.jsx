import LocaleContext from "@Features/Contexts/LocaleContext"
import { Box, Button, Card, CardBody, Flex, Grid, Heading, Spinner } from "@chakra-ui/react"
import { bool, func, object, string } from "prop-types"
import { useContext } from "react"

const ListCategoryThreads = ({ isLoading, categories, filterByCategory, setFilterByCategory }) => {

    const { locale } = useContext(LocaleContext)

    return (
        <Box
            display={{
                base: 'none',
                md: 'block',
            }}
        >
            <Card
                position={'sticky'}
                top={{
                    md: '90px',
                    lg: '105px'
                }}
            >
                <CardBody>
                    <Flex flexDirection={'row'} wrap={'wrap'} alignItems={'start'} gap={3} w={'100%'}>
                        <Heading size={{
                            md: 'md',
                        }}>{locale === 'id' ? 'Semua Kategori' : 'All Category'}</Heading>
                        {isLoading ? (<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='md'
                        />) : (
                            <Grid templateColumns='repeat(2, 1fr)' gap="3" w={'100%'}>
                                {Array.from(categories).map(category => {
                                    if (filterByCategory === category) {
                                        return (
                                            <Button
                                                key={category}
                                                fontSize={'small'}
                                                colorScheme={'telegram'}
                                                onClick={() => setFilterByCategory('')}
                                            >
                                                {category}
                                            </Button>
                                        )
                                    }
                                    return (
                                        <Button
                                            fontSize={'small'}
                                            onClick={() => setFilterByCategory(category)}
                                            key={category}
                                        >
                                            {category}
                                        </Button>
                                    )
                                })}
                            </Grid>
                        )}
                    </Flex>
                </CardBody>
            </Card>
        </Box>
    )
}

ListCategoryThreads.propTypes = {
    isLoading: bool,
    categories: object,
    filterByCategory: string,
    setFilterByCategory: func,
}

export default ListCategoryThreads
