import { Box, Stack, Text } from '@chakra-ui/react'
import { Button, Toggle } from '@opengovsg/design-system-react'
import { FaArrowRight } from 'react-icons/fa'
import ClinicRow from '~/components/Clinic/ClinicRow'
import ClinicList from '../Clinic/ClinicList'

const Third = () => {
  const clinicDataList = [
    {
      id: '61f4d8d9-4acc-47db-b874-2f4460717792',
      name: 'Jimmy Teng Medical Clinic',
      address: '42 Willow Lane #305 Greenwood Heights FA 54321',
      femalePrac: true,
      rating: '48',
      negSentiment: true,
      region: 'West',
      specialReview:
        'Not the best, doctor was a tad bit insensitive and stubborn',
    },
    {
      id: '72c3eaa0-8f57-4a8f-b4a2-9f830cc6b381',
      name: 'Marys Wellness Center',
      address: '789 Pine Street #02-15 Maple Grove XY 98765',
      femalePrac: true,
      rating: '56',
      negSentiment: true,
      region: 'East',
      specialReview: 'Great service and friendly staff!',
    },
    {
      id: '90a2b1c3-6f87-402e-a8b3-5cf2f4c28a94',
      name: 'Green Meadows Healthcare',
      address: '123 Oak Avenue #10-02 Sunnydale BC 65432',
      femalePrac: true,
      rating: '72',
      negSentiment: false,
      region: 'North',
      specialReview: 'Highly recommended for their expertise!',
    },
  ]
  return (
    <Stack p={{ base: '2rem', md: '5rem' }} alignItems={'center'} spacing={7}>
      <Box w={{ base: '100%', md: '55%' }}>
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          color={'#F35A2B'}
          textAlign={'center'}
        >
          Hear from real women&apos;s experiences.
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          textAlign={'center'}
          mt={'1.5rem'}
        >
          Find verified doctors and clinics specialised in women’s health based
          on honest reviews.
        </Text>
      </Box>
      <Box
        w="100%"
        justifyContent={'center'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box w="100%" justifyContent={'end'} display={'flex'}>
          <Toggle label="View clinics with female practitioners" />
        </Box>
        <ClinicRow clinics={clinicDataList} />
      </Box>
      <Button
        variant={'outline'}
        colorScheme={'black'}
        borderRadius={'3rem'}
        w={'fit-content'}
        rightIcon={<FaArrowRight />}
        alignItems={'center'}
        px={{ base: '1rem', md: '2rem' }}
        mt={{ base: '1rem', md: '4rem' }}
      >
        Explore more clinics around you
      </Button>
    </Stack>
  )
}

export default Third
