import { Card, Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, VStack } from "@chakra-ui/react"

const SkeletonHome = () => {
    return (
        <Card
            w={{
                base: '340px',
                md: '500px',
                lg: '800px',
            }}
        >
            <Flex padding={{
                base: 4,
                md: 5,
            }}
                direction={'column'}
                gap={5}
            >
                <Flex justifyContent={'space-between'} >
                    <HStack>
                        <SkeletonCircle
                            size={{
                                base: '50px'
                            }}
                        />
                        <VStack>
                            <Skeleton w={'90px'} height={'20px'} rounded={20} />
                            <Skeleton w={'90px'} height={'15px'} rounded={20} />
                        </VStack>
                    </HStack>
                    <Skeleton w={20} height={'18px'} />
                </Flex>
                <Skeleton h={5} w={'60px'} rounded={20} />
                <SkeletonText />
                <HStack spacing={4}>
                    <SkeletonCircle />
                    <SkeletonCircle />
                    <SkeletonCircle />
                </HStack>
            </Flex>
        </Card>
    )
}

export default SkeletonHome
