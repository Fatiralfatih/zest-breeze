import { Card, Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { fetchCreateThread } from "@utils/api"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import InputAddThread from "./UI/InputAddThread";
import LocaleContext from "@Features/Contexts/LocaleContext";

const AddThread = () => {
    const bgColor = useColorModeValue('white-smoke', 'dark')

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const onAddThread = async ({ title, body, category }) => {
        const { error } = await fetchCreateThread({ title, body, category });
        if (!error) {
            setIsLoading(true);
            setTimeout(() => {
                navigate('/')
            }, 500);
        }
        return { error };
    }

    const { locale } = useContext(LocaleContext);

    return (
        <VStack paddingTop={150} gap={5} bg={bgColor} minH={'100vh'}>
            <Heading>{locale === 'id' ? 'Tambah Thread' : 'Create Thread'}</Heading>

            <Card
                w={{
                    base: '350px',
                    md: '500px'
                }}
                maxW={'xl'}
                padding={8}
            >
                <InputAddThread onAddThread={onAddThread} isLoading={isLoading} />
            </Card>
        </VStack>
    )
}

export default AddThread
