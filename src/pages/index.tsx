import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Card,
  CardHeader,
  Tag,
  CardBody,
  Heading,
} from '@chakra-ui/react'
import {
  Button,
  RestrictedFooter,
  useIsMobile,
  MultiSelect,
  Toggle,
  RestrictedGovtMasthead,
} from '@opengovsg/design-system-react'
import Image from 'next/image'
import NextLink from 'next/link'
import { OgpLogo } from '~/components/Svg/OgpLogo'
import {
  AppPublicHeader,
  FeatureGridItem,
  FeatureSection,
  LandingSection,
  SectionBodyText,
  SectionHeadingText,
} from '~/features/landing/components'
import ClinicList from '~/components/Clinic/ClinicList'
import { BiMapPin } from 'react-icons/bi'

import { AppGrid } from '~/templates/AppGrid'
import { trpc } from '~/utils/trpc'

const LandingPage = () => {
  const isMobile = useIsMobile()
  //create Clinic
  const createClinicAPI = trpc.clinic.createClinic.useMutation()
  const createClinic = () =>
    createClinicAPI.mutate({
      name: 'Aljunied Clinic',
    })
  //create a Review
  const createReviewAPI = trpc.review.createReview.useMutation()
  const createReview = () => {
    createReviewAPI.mutate({
      content: 'Wow this clinic is great',
      verified: true,
      clinicId: 'clrhbsnbr0008bod8zsz91io7',
      userId: 'clrgot2io0000m9mm1cm0si3w',
    })
  }
  //fetch Users
  const { data: userData, refetch: refetchUsers } =
    trpc.review.fetchUsers.useQuery()
  const fetchUsers = async () => {
    await refetchUsers()
    console.log(userData)
  }
  //fetch Clinics
  const { data: clinicData, refetch: refetchClinics } =
    trpc.clinic.fetchClinics.useQuery()
  const fetchClinics = async () => {
    await refetchClinics()
    console.log(clinicData)
  }
  //fetch Clinic by Id
  const { data: clinicByIdData, refetch: refectchClinicById } =
    trpc.clinic.fetchClinicById.useQuery({
      clinicId: 'clrhbsnbr0008bod8zsz91io7',
    })
  const fetchClinicById = async () => {
    await refectchClinicById()
    console.log(clinicByIdData)
  }

  return (
    <>
      {/* <h1>these buttons are here just to test my api routes hehe</h1>
      <Stack gap={4} direction={'row'}>
        <Button onClick={fetchUsers}>
          Click here to fetch a list of users
        </Button>
        <Button onClick={fetchClinics}>
          Click here to fetch a list of Clinics
        </Button>
        <Button onClick={fetchClinicById}>
          Click here to fetch a clinic based on a particular id
        </Button>
      </Stack>
      <br />
      <Stack gap={4} direction={'row'}>
        <Button onClick={createClinic}>Click here to create a clinic</Button>
        <Button onClick={createReview}>Click here to create a Review</Button>
      </Stack> */}

      {/* <AppPublicHeader /> */}
      <RestrictedGovtMasthead />
      <LandingSection bg="#FFFFFF" pt={{ base: '5rem', md: '6rem' }} px={0}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="left"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1}>
            <Text
              as="h1"
              textStyle={{
                base: 'responsive-display.heavy',
                md: 'responsive-display.heavy-480',
              }}
              color="base.content.strong"
            >
              Find a doctor for your women&apos;s health concerns.
            </Text>
            <SectionBodyText mt="1rem">
              [TODO FOR THIS PAGE] Make the header a layout instead
            </SectionBodyText>
            <Box mt="2.5rem">
              <MultiSelect //need to fix this lol
                placeholder={'Select a region'}
                items={[
                  {
                    value: 'Anywhere in Singapore',
                  },
                  {
                    value: 'Central',
                  },
                  {
                    value: 'North',
                  },
                  {
                    value: 'East',
                  },
                  {
                    value: 'Northeast',
                  },
                  {
                    value: 'West',
                  },
                ]}
                name="RegionSelect"
                onChange={function Ha() {}}
                values={[]}
              />
            </Box>

            <Box mt="1rem">
              <Button isFullWidth={isMobile} as={NextLink} href={'/clinics'}>
                Find a clinic
              </Button>
            </Box>
          </Flex>
        </Stack>
      </LandingSection>
      <LandingSection bg="#FFFFFF" pt={{ base: '2rem', md: '4rem' }} px={0}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1}>
            <Text as="h1" textStyle={'h4'} color="base.content.strong">
              Find a clinic that meets your needs based on 200+ reviews
            </Text>
            <SectionBodyText mt="0.5rem">
              Select a clinic to read their reviews
            </SectionBodyText>
            <Box pt={'2rem'}>
              <Toggle
                description=""
                label="View clinics with female practitioners"
              />
              <ClinicList />
              <Box mt="2.5rem">
                <Button
                  isFullWidth={isMobile}
                  as={NextLink}
                  href={'/clinics'}
                  variant="outline"
                >
                  Show me more clinics
                </Button>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </LandingSection>
      {/* <LandingSection>
        <SectionHeadingText>Our application features</SectionHeadingText>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingX="2.5rem"
          spacingY="4rem"
          mt="4rem"
        >
          <FeatureGridItem
            // image={}
            title="Example feature 1"
            description="This is a description of one of the features in the application"
          />
          <FeatureGridItem
            // image={}
            title="Example feature 2"
            description="This is a description of one of the features in the application"
          />
          <FeatureGridItem
            // image={}
            title="Example feature 3"
            description="This is a description of one of the features in the application"
          />
        </SimpleGrid>
      </LandingSection>
      <LandingSection bg="base.canvas.brand-subtle">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1}>
            <SectionHeadingText>Another call to action</SectionHeadingText>
            <SectionBodyText mt="1rem">
              Sign in with your email address, and start building your app
              immediately. It’s free, and requires no onboarding or approvals.
            </SectionBodyText>
          </Flex>
          <Box flex={1} aria-hidden>
            <Image
              src="/assets/landing-banner.svg"
              alt="StarterApp hero"
              width={480}
              height={400}
            />
          </Box>
        </Stack>
      </LandingSection>
      <FeatureSection
        title="All the government tools you need to manage your workflow"
        direction={{ base: 'column', lg: 'row' }}
      >
        <SectionBodyText mt="1rem">
          Check out the <b>Open Government Products Suite</b>, and if you are a
          public officer you can mix and match from our set of productivity and
          collaboration tools.{' '}
        </SectionBodyText>
      </FeatureSection>
      <LandingSection bg="base.content.strong" align="center">
        <OgpLogo aria-hidden w="3.5rem" h="3.5rem" color="blue.500" />
        <Text
          textAlign="center"
          textStyle={{
            base: 'responsive-heading.heavy',
            md: 'responsive-heading.heavy-480',
          }}
          color="white"
          mt="2rem"
        >
          Start building your app now.
        </Text>
      </LandingSection> */}
      {/* <AppGrid bg="base.canvas.brand-subtle" px="1.5rem">
        <Box gridColumn={{ base: '1 / -1', md: '2 / 12' }}>
          <RestrictedFooter
            // This component can only be used if this is an application created by OGP.
            containerProps={{
              px: 0,
            }}
            appName="Starter Kit"
            appLink="/"
          />
        </Box>
      </AppGrid> */}
    </>
  )
}

export default LandingPage
