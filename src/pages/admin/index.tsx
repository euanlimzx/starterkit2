import { Stack, Button } from '@chakra-ui/react'
import { trpc } from '~/utils/trpc'

const Test = () => {
  //create Clinic
  const createClinicAPI = trpc.clinic.createManyClinics.useMutation()
  const createClinic = () => createClinicAPI.mutate()
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
      <h1>these buttons are here just to test my api routes hehe</h1>
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
      </Stack>
    </>
  )
}

export default Test

// const archivedCodeFromLandingPage = () => {
//   return (
//     <>
//       <LandingSection>
//         <SectionHeadingText>Our application features</SectionHeadingText>
//         <SimpleGrid
//           columns={{ base: 1, md: 2, lg: 3 }}
//           spacingX="2.5rem"
//           spacingY="4rem"
//           mt="4rem"
//         >
//           <FeatureGridItem
//             // image={}
//             title="Example feature 1"
//             description="This is a description of one of the features in the application"
//           />
//           <FeatureGridItem
//             // image={}
//             title="Example feature 2"
//             description="This is a description of one of the features in the application"
//           />
//           <FeatureGridItem
//             // image={}
//             title="Example feature 3"
//             description="This is a description of one of the features in the application"
//           />
//         </SimpleGrid>
//       </LandingSection>
//       <LandingSection bg="base.canvas.brand-subtle">
//         <Stack
//           direction={{ base: 'column', lg: 'row' }}
//           align="center"
//           spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
//         >
//           <Flex flexDir="column" flex={1}>
//             <SectionHeadingText>Another call to action</SectionHeadingText>
//             <SectionBodyText mt="1rem">
//               Sign in with your email address, and start building your app
//               immediately. It’s free, and requires no onboarding or approvals.
//             </SectionBodyText>
//           </Flex>
//           <Box flex={1} aria-hidden>
//             <Image
//               src="/assets/landing-banner.svg"
//               alt="StarterApp hero"
//               width={480}
//               height={400}
//             />
//           </Box>
//         </Stack>
//       </LandingSection>
//       <FeatureSection
//         title="All the government tools you need to manage your workflow"
//         direction={{ base: 'column', lg: 'row' }}
//       >
//         <SectionBodyText mt="1rem">
//           Check out the <b>Open Government Products Suite</b>, and if you are a
//           public officer you can mix and match from our set of productivity and
//           collaboration tools.{' '}
//         </SectionBodyText>
//       </FeatureSection>
//       <LandingSection bg="base.content.strong" align="center">
//         <OgpLogo aria-hidden w="3.5rem" h="3.5rem" color="blue.500" />
//         <Text
//           textAlign="center"
//           textStyle={{
//             base: 'responsive-heading.heavy',
//             md: 'responsive-heading.heavy-480',
//           }}
//           color="white"
//           mt="2rem"
//         >
//           Start building your app now.
//         </Text>
//       </LandingSection>
//       <AppGrid bg="base.canvas.brand-subtle" px="1.5rem">
//         <Box gridColumn={{ base: '1 / -1', md: '2 / 12' }}>
//           <RestrictedFooter
//             // This component can only be used if this is an application created by OGP.
//             containerProps={{
//               px: 0,
//             }}
//             appName="Starter Kit"
//             appLink="/"
//           />
//         </Box>
//       </AppGrid>{' '}
//     </>
//   )
// }
