import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import { useRouter } from 'next/router'
import { trpc } from '~/utils/trpc'

const createReview = () => {
  // const clinicDataList = [
  //   {
  //     id: '61f4d8d9-4acc-47db-b874-2f4460717792',
  //     name: 'Jimmy Teng Medical Clinic',
  //     address: '42 Willow Lane #305 Greenwood Heights FA 54321',
  //     femalePrac: false,
  //     rating: '48',
  //     negSentiment: true,
  //     region: 'West',
  //     specialReview: 'i fill up later',
  //   },
  //   {
  //     id: '72c3eaa0-8f57-4a8f-b4a2-9f830cc6b381',
  //     name: 'Marys Wellness Center',
  //     address: '789 Pine Street #02-15 Maple Grove XY 98765',
  //     femalePrac: true,
  //     rating: '56',
  //     negSentiment: true,
  //     region: 'East',
  //     specialReview: 'Great service and friendly staff!',
  //   },
  //   {
  //     id: '90a2b1c3-6f87-402e-a8b3-5cf2f4c28a94',
  //     name: 'Green Meadows Healthcare',
  //     address: '123 Oak Avenue #10-02 Sunnydale BC 65432',
  //     femalePrac: true,
  //     rating: '72',
  //     negSentiment: false,
  //     region: 'North',
  //     specialReview: 'Highly recommended for their expertise!',
  //   },
  //   {
  //     id: 'c4f37e2b-1e6d-4678-aa0b-bb2d57828c6f',
  //     name: 'Central Wellness Clinic',
  //     address: '567 Elm Street #05-10 Riverside MN 87654',
  //     femalePrac: true,
  //     rating: '68',
  //     negSentiment: false,
  //     region: 'Central',
  //     specialReview: 'Professional and efficient services!',
  //   },
  //   {
  //     id: 'e25c12d0-6ff4-4e22-a550-9b2d8d172c36',
  //     name: 'Harmony Health Hub',
  //     address: '890 Birch Lane #08-01 Harmony Ville CA 34567',
  //     femalePrac: false,
  //     rating: '60',
  //     negSentiment: true,
  //     region: 'Northeast',
  //     specialReview: 'Needs improvement in customer service.',
  //   },
  //   // Add more variations as needed...
  // ]
  const router = useRouter()
  const clinicId = router.query.clinicId
  const clinic = trpc.clinic.fetchClinicById.useSuspenseQuery({
    clinicId: clinicId,
  })[0]
  return (
    <LandingSection bg="#FFFFFF" pt={{ base: '2rem' }} px={0}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
      >
        <Flex flexDir="column" flex={1}>
          <Text
            as="h1"
            textStyle={'h4'}
            color="base.content.strong"
            textAlign={'center'}
          >
            {`Thanks for reviewing ${clinic?.name}!`}
          </Text>
          <SectionBodyText mt="1rem" textAlign={'center'}>
            Your submission will appear publicly after review.
          </SectionBodyText>
          <Box mt="2.5rem">
            <Button as={NextLink} href={'/'} width={'100%'}>
              Back to Home
            </Button>
            <Button
              as={NextLink}
              href={'/HAS'}
              width={'100%'}
              variant={'clear'}
              mt={'1rem'}
            >
              Or, book another visit at this clinic
            </Button>
          </Box>
        </Flex>
      </Stack>
    </LandingSection>
  )
}

export default createReview
