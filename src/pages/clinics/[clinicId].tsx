import { Box, Flex, Stack, Text, Tag, Divider, Icon } from '@chakra-ui/react'
import { Button, useIsMobile, Toggle } from '@opengovsg/design-system-react'
import NextLink from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import ReviewList from '~/components/Review/ReviewList'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { trpc } from '~/utils/trpc'
import { BsStars } from 'react-icons/bs'

export type review = {
  id: string
  verified: boolean
  negSentiment: boolean
  reviewContent: string
  concernValues: string[]
  descriptionValues: string[]
  date: Date
}
export type reviewList = review[]
const IndividualClinicPage = () => {
  // const reviewList = [
  //   {
  //     id: '282170b8-005f-49c6-8c0a-8f32297d9bb4',
  //     verified: true,
  //     negSentiment: false,
  //     review: 'Very pleasant experience, would recommend to other females!',
  //     tags: ['Empathetic', 'Caring', 'Attentive Listener'],
  //     date: new Date(2023, 11, 15),
  //   },
  //   {
  //     id: '372890a2-4f2c-4b65-9d2b-6fd0d0c20e51',
  //     verified: true,
  //     negSentiment: true,
  //     review: 'Not satisfied with the service. Staff seemed disorganized.',
  //     tags: ['Disorganized', 'Unsatisfactory'],
  //     date: new Date(2023, 11, 10),
  //   },
  //   {
  //     id: 'b6b6e5e5-8bb8-492d-b1c1-5d85d0cfdcc1',
  //     verified: false,
  //     negSentiment: false,
  //     review: 'Excellent clinic! The doctors are knowledgeable and caring.',
  //     tags: ['Excellent', 'Knowledgeable', 'Caring'],
  //     date: new Date(2023, 10, 28),
  //   },
  //   {
  //     id: '5be6ca22-5e91-4a65-b6c8-1ae44a48bf84',
  //     verified: true,
  //     negSentiment: false,
  //     review:
  //       'Friendly staff and clean environment. Had a positive experience.',
  //     tags: ['Friendly', 'Clean', 'Positive Experience'],
  //     date: new Date(2023, 9, 5),
  //   },
  //   {
  //     id: 'c0a9c360-83f8-4a25-9cb1-001cb8c8ad9e',
  //     verified: true,
  //     negSentiment: false,
  //     review: 'Efficient service and short waiting times. Would visit again.',
  //     tags: ['Efficient', 'Short Waiting Times', 'Recommended'],
  //     date: new Date(2023, 8, 20),
  //   },
  // ]

  const isMobile = useIsMobile()
  const router = useRouter()
  const clinicId = router.query.clinicId
  const clinic = trpc.clinic.fetchClinicById.useSuspenseQuery({
    clinicId: clinicId,
  })[0]
  const reviewList = clinic.reviews
  const [verified, setVerified] = useState(false)
  const [reviews, setReviews] = useState(reviewList)
  const handleFilter = () => {
    if (verified == true) {
      const verifiedReviews = reviewList.filter((review) => {
        return review.verified == true
      })
      setReviews(verifiedReviews)
    } else {
      setReviews(reviewList)
    }
  }
  useEffect(handleFilter, [verified])

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
                <Button isFullWidth={isMobile} as={NextLink} href={'/HAS'}>
                  Book a women&apos;s health appointment
                </Button>
                <Button
                  isFullWidth={isMobile}
                  as={NextLink}
                  href={`/review/${clinic?.id}`}
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
          bg="brand.primary.50"
          my={'2rem'}
          p={'1.25rem'}
          borderRadius={'0.5rem'}
        >
          <Box mb={'0.5rem'} display={'flex'} alignItems={'center'}>
            <Icon as={BsStars} aria-hidden fontSize="1rem" />
            <Text textStyle={'caption-2'} as="span" ml={'0.5rem'}>
              AI-generated summary
            </Text>
          </Box>

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
        <Box pt={'2rem'} pb={'0.45rem'}>
          <Toggle
            description=""
            label="Verified reviews only"
            onChange={() => {
              setVerified((verified) => !verified)
            }}
          />
        </Box>
        <ReviewList reviewList={reviews} />
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
