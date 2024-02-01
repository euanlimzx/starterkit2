import { Box, Stack, Text, Image } from '@chakra-ui/react'
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
        width={{ base: '85%', md: '50%' }}
        justifyContent={'center'}
        alignItems={{ base: 'end', md: 'center' }}
        pb={{ base: '5rem', md: '0rem' }}
        display={'flex'}
        height="100%"
      >
        <Stack
          direction={'column'}
          alignItems={{ base: 'start', md: 'start' }}
          ml={{ base: '2rem', md: '10rem' }}
          spacing={0}
        >
          <Text
            fontSize={{ base: '9xl', md: '10xl' }}
            fontWeight={'semibold'}
            color={'#F35A2B'}
            fontFamily={'DMSans'}
            lineHeight={'1'}
            letterSpacing={'-0.03em'}
            textAlign={{ base: 'start', md: 'start' }}
          >
            trusted answers on women&apos;s health
          </Text>
          <Box my={'2rem'} fontSize={'xl'}>
            <Text as="span">
              info verified by doctors, reviews written by real women
            </Text>
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
