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
      <Box
        width={{ base: '100%', md: '30%' }}
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
        height="100%"
      >
        <Stack
          direction={'column'}
          alignItems={{ base: 'center', md: 'start' }}
          ml={{ base: '', md: '10rem' }}
          spacing={0}
        >
          <Text
            fontSize={{ base: '8xl', md: '10xl' }}
            fontWeight={'semibold'}
            color={'#F35A2B'}
            fontFamily={'DMSans'}
            lineHeight={'1'}
            letterSpacing={'-0.03em'}
            textAlign={{ base: 'center', md: 'start' }}
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
        </Stack>
      </Box>
      <Box width={{ base: '0%', md: '70%' }}></Box>
    </Box>
  )
}

export default First
