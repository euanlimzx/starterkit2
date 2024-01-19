import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import {
  Button,
  MultiSelect,
  Toggle,
  useIsMobile,
} from '@opengovsg/design-system-react'
import { useState } from 'react'
import ClinicList from '~/components/Clinic/ClinicList'
import { LandingSection, SectionBodyText } from '~/features/landing/components'

// clinicDataList.js

const clinicDataList = [
  {
    id: '61f4d8d9-4acc-47db-b874-2f4460717792',
    name: 'Jimmy Teng Medical Clinic',
    address: '42 Willow Lane #305 Greenwood Heights FA 54321',
    femalePrac: false,
    rating: '48',
    negSentiment: true,
    region: 'west',
    specialReview: 'i fill up later',
  },
  {
    id: '72c3eaa0-8f57-4a8f-b4a2-9f830cc6b381',
    name: 'Marys Wellness Center',
    address: '789 Pine Street #02-15 Maple Grove XY 98765',
    femalePrac: true,
    rating: '56',
    negSentiment: false,
    region: 'east',
    specialReview: 'Great service and friendly staff!',
  },
  {
    id: '90a2b1c3-6f87-402e-a8b3-5cf2f4c28a94',
    name: 'Green Meadows Healthcare',
    address: '123 Oak Avenue #10-02 Sunnydale BC 65432',
    femalePrac: true,
    rating: '72',
    negSentiment: false,
    region: 'north',
    specialReview: 'Highly recommended for their expertise!',
  },
  {
    id: 'c4f37e2b-1e6d-4678-aa0b-bb2d57828c6f',
    name: 'Central Wellness Clinic',
    address: '567 Elm Street #05-10 Riverside MN 87654',
    femalePrac: true,
    rating: '68',
    negSentiment: false,
    region: 'central',
    specialReview: 'Professional and efficient services!',
  },
  {
    id: 'e25c12d0-6ff4-4e22-a550-9b2d8d172c36',
    name: 'Harmony Health Hub',
    address: '890 Birch Lane #08-01 Harmony Ville CA 34567',
    femalePrac: false,
    rating: '60',
    negSentiment: true,
    region: 'south',
    specialReview: 'Needs improvement in customer service.',
  },
  // Add more variations as needed...
]

const LandingPage = () => {
  const isMobile = useIsMobile()
  const [multiselectValues, setMultiSelectValues] = useState([])
  return (
    <>
      <LandingSection bg="#FFFFFF" pt={{ base: '3rem', md: '10rem' }} px={0}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quam mollitia, nemo quibusdam dolorem autem!
            </SectionBodyText>
            <Box mt="2.5rem">
              <MultiSelect
                placeholder={'Select a region'}
                items={[
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
                onChange={(e) => {
                  setMultiSelectValues(e)
                  console.log(e)
                }}
                values={multiselectValues}
              />
            </Box>

            <Box mt="1rem">
              <Button isFullWidth={isMobile}>Find a clinic</Button>
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
                <Button isFullWidth={isMobile} variant="outline">
                  Show me more clinics
                </Button>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </LandingSection>
    </>
  )
}

export default LandingPage
