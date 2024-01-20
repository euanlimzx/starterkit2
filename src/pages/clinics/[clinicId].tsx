import { Box, Flex, Stack, Text, Tag, Divider } from '@chakra-ui/react'
import { Button, useIsMobile, Toggle } from '@opengovsg/design-system-react'
import NextLink from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import ReviewList from '~/components/Review/ReviewList'
import { useRouter } from 'next/router'

const IndividualClinicPage = () => {
  const clinicDataList = [
    {
      id: '61f4d8d9-4acc-47db-b874-2f4460717792',
      name: 'Jimmy Teng Medical Clinic',
      address: '42 Willow Lane #305 Greenwood Heights FA 54321',
      femalePrac: false,
      rating: '48',
      negSentiment: true,
      region: 'West',
      specialReview: 'i fill up later',
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
    {
      id: 'c4f37e2b-1e6d-4678-aa0b-bb2d57828c6f',
      name: 'Central Wellness Clinic',
      address: '567 Elm Street #05-10 Riverside MN 87654',
      femalePrac: true,
      rating: '68',
      negSentiment: false,
      region: 'Central',
      specialReview: 'Professional and efficient services!',
    },
    {
      id: 'e25c12d0-6ff4-4e22-a550-9b2d8d172c36',
      name: 'Harmony Health Hub',
      address: '890 Birch Lane #08-01 Harmony Ville CA 34567',
      femalePrac: false,
      rating: '60',
      negSentiment: true,
      region: 'Northeast',
      specialReview: 'Needs improvement in customer service.',
    },
    // Add more variations as needed...
  ]
  const isMobile = useIsMobile()
  const router = useRouter()
  const clinicId = router.query.clinicId
  const clinic = clinicDataList.filter((clinic) => {
    return clinic.id == clinicId
  })[0]

  return (
    <>
      <LandingSection bg="#FFFFFF" pt={{ base: '2rem', md: '4rem' }} px={0}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="left"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1}>
            <Box alignItems={'start'}>
              <Button
                leftIcon={<BiLeftArrowAlt fontSize="1.5rem" />}
                variant={'clear'}
                as={NextLink}
                href={'/'}
              >
                Go back to all clinics
              </Button>
            </Box>

            <Text
              as="h1"
              textStyle={{
                base: 'responsive-display.heavy',
                md: 'responsive-display.heavy-480',
              }}
              color="base.content.strong"
              pt="1rem"
            >
              {clinic?.name}
            </Text>
            <SectionBodyText mt="1rem">{clinic?.address}</SectionBodyText>
            {clinic?.femalePrac == true ? (
              <Tag colorScheme="gray" borderRadius={'2rem'} my={'1.5rem'}>
                Female practitioner available
              </Tag>
            ) : (
              <br />
            )}
            <Box>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <Button isFullWidth={isMobile}>
                  Book a women&apos;s health appointment
                </Button>
                <Button
                  isFullWidth={isMobile}
                  as={NextLink}
                  href={'/review'}
                  variant={'outline'}
                >
                  Write a review for this clinic
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </LandingSection>
      <LandingSection
        bg="#FFFFFF"
        pt={{ base: '0.5rem', md: '1rem' }}
        px={0}
        pb={0}
      >
        <Text
          as="h3"
          textStyle={{
            base: 'h4',
            md: 'h4',
          }}
          color="base.content.strong"
          py="1rem"
        >
          {`Here’s what visitors with women’s health concerns said about ${clinic?.name}`}
        </Text>
        <Box>
          <Text
            as="h3"
            textStyle={{
              base: 'h4',
              md: 'h4',
            }}
            color="base.content.strong"
          >
            {clinic?.rating}%
          </Text>
          <Text as="span" fontSize="sm">
            of reviewers rated their experience as
          </Text>
          {clinic?.negSentiment ? (
            <Text
              as="span"
              fontSize="sm"
              color={'orange.500'}
              fontWeight={'bold'}
            >
              &nbsp;Positive
            </Text>
          ) : (
            <Text
              as="span"
              fontSize="sm"
              color={'green.500'}
              fontWeight={'bold'}
            >
              &nbsp;Positive
            </Text>
          )}
        </Box>
        <Box
          bg="brand.secondary.50"
          my={'2rem'}
          p={'1.25rem'}
          borderRadius={'0.5rem'}
        >
          <Text fontSize={'sm'}>{clinic?.specialReview}</Text>
        </Box>
        <Divider />
      </LandingSection>
      <LandingSection bg="#FFFFFF" px={0}>
        <Text
          as="h3"
          textStyle={{
            base: 'h4',
            md: 'h4',
          }}
          color="base.content.strong"
        >
          {`All reviews for ${clinic?.name} `}
        </Text>
        <Box pt={'2rem'}>
          <Toggle description="" label="Verified reviews only" />
        </Box>
        <ReviewList />
        <Button isFullWidth={isMobile} variant={'outline'} mt={'1rem'}>
          Load more reviews
        </Button>
      </LandingSection>
    </>
  )
}

export default IndividualClinicPage

//ignore this
const Archive = () => {
  // <LandingSection
  //   bg="base.canvas.brand-subtle"
  //   pt={{ base: '2rem', md: 0 }}
  //   px={0}
  // >
  //   <Stack
  //     direction={{ base: 'column', lg: 'row' }}
  //     align="center"
  //     spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
  //   >
  //     <Flex flexDir="column" flex={1}>
  //       <Text
  //         as="h1"
  //         textStyle={{
  //           base: 'responsive-display.heavy',
  //           md: 'responsive-display.heavy-480',
  //         }}
  //         color="base.content.strong"
  //       >
  //         This is where we will be displaying details of a particular clinic
  //       </Text>
  //       <SectionBodyText mt="1rem">
  //         [TODO] API Fetch route to list details of one clinic + all the
  //         reviews <br /> [TODO] Some sort of review filtering function? <br />
  //         [TODO] From here, users are able to book appointment for this clinic
  //         directly from HAS
  //         <br />
  //         Users will be able to select a particular clinic to view more in
  //         depth, this is the route they will take (button below)
  //       </SectionBodyText>
  //       <Box mt="2.5rem">
  //         <Button
  //           as={NextLink}
  //           href={'/'}
  //           rightIcon={<BiRightArrowAlt fontSize="1.5rem" />}
  //         >
  //           Back to home
  //         </Button>
  //       </Box>
  //     </Flex>
  //   </Stack>
  // </LandingSection>
}
