import { Box, Flex, Stack, Text, Tag, Divider } from '@chakra-ui/react'
import { Button, useIsMobile, Toggle } from '@opengovsg/design-system-react'
import NextLink from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import ReviewList from '~/components/Review/ReviewList'

const IndividualClinicPage = () => {
  const isMobile = useIsMobile()

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
              Lee Medical Clinic
            </Text>
            <SectionBodyText mt="1rem">
              115b Alkaff Crescent #01-05 S342115 (69m away)
            </SectionBodyText>
            <Tag colorScheme="gray" borderRadius={'2rem'} my={'1.5rem'}>
              Female practitioner available
            </Tag>

            <Box>
              <Button isFullWidth={isMobile} as={NextLink} href={'/clinics'}>
                Book a women&apos;s health appointment
              </Button>
              <Button
                isFullWidth={isMobile}
                as={NextLink}
                href={'/clinics'}
                variant={'outline'}
                mt={'1rem'}
              >
                Write a review for this clinic
              </Button>
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
          Here’s what visitors with women’s health concerns said about Lee
          Medical Clinic
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
            80%
          </Text>
          <Text as="span" fontSize="sm">
            of reviewers rated their experience as{' '}
          </Text>
          <Text as="span" fontSize="sm" color={'green.500'} fontWeight={'bold'}>
            Positive
          </Text>
        </Box>
        <Box
          bg="brand.secondary.50"
          my={'2rem'}
          p={'1.25rem'}
          borderRadius={'0.5rem'}
        >
          <Text fontSize={'sm'}>
            The doctor at Lee Medical Clinic is compassionate, caring but some
            reviews do mention strong opinions about treatment options
          </Text>
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
          All reviews for Lee Medical Clinic
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
