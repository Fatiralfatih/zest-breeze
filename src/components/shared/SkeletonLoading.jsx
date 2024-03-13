import { Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, VStack } from '@chakra-ui/react'

const SkeletonLoading = () => {
  return (
    <Stack padding={{
      base: 4,
      md: 5,
    }}
      spacing={4}
    >
      <Flex justifyContent={'space-between'}>
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
      </HStack>
      <Skeleton h={20} />
      <Flex justifyContent={'end'}>
        <Skeleton h={8} w={'60px'} rounded={10} />
      </Flex>
      <SkeletonText />
    </Stack>
  )
}

export default SkeletonLoading
