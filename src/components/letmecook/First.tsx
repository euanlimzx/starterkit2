import { Box, Stack, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'
import { FaArrowRight } from 'react-icons/fa'

const First = () => {
  return (
    <Box
      bgGradient={
        'linear-gradient(68deg, rgba(255,162,147,1) 23%, rgba(255,188,159,1) 74%)'
      }
      height="75vh"
    >
      <Stack height="100%">
        <Box
          w="50%"
          height="100%"
          display={'flex'}
          flexDir={'column'}
          ml={'5rem'}
          mt={'10rem'}
        >
          <Text
            fontSize={'10xl'}
            fontWeight={'semibold'}
            color={'#F35A2B'}
            fontFamily={'DMSans'}
            lineHeight={'1'}
            letterSpacing={'-0.03em'}
          >
            empowering your health choices
          </Text>
          <Box my={'2rem'} fontSize={'lg'}>
            <Text as="span">A&nbsp;</Text>
            <Text as="span" fontWeight={'bold'}>
              trusted&nbsp;
            </Text>
            <Text as="span">source for women</Text>
          </Box>
          <Button
            variant={'outline'}
            colorScheme={'black'}
            borderRadius={'3rem'}
            w={'fit-content'}
            rightIcon={<FaArrowRight />}
            alignItems={'center'}
            px={'2rem'}
          >
            Explore topics by age group
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default First
