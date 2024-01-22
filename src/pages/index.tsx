import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import {
  Button,
  MultiSelect,
  Toggle,
  useIsMobile,
} from '@opengovsg/design-system-react'
import { useState, useEffect, useRef } from 'react'
import ClinicList from '~/components/Clinic/ClinicList'
import { LandingSection, SectionBodyText } from '~/features/landing/components'

// clinicDataList.js

export type Clinic = {
  id: string
  name: string
  address: string
  femalePrac: boolean
  rating: string
  negSentiment: boolean
  region: string
  specialReview: string
}

export type clinicDataList = Clinic[]

const LandingPage = () => {
  const clinicDataList = [
    {
      id: '61f4d8d9-4acc-47db-b874-2f4460717792',
      name: 'Jimmy Teng Medical Clinic',
      address: '42 Willow Lane #305 Greenwood Heights FA 54321',
      femalePrac: false,
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
  ]
  const sortByRating = (a: Clinic, b: Clinic) => {
    return Number(b.rating) - Number(a.rating)
  }
  const filterFemalePrac = (clinics: clinicDataList) => {
    if (female == true) {
      const femaleFilteredClinics = clinics.filter((clinic) => {
        return clinic.femalePrac == true
      })

      return femaleFilteredClinics
    } else {
      return clinics
    }
  }
  const filterRegion = (clinicDataList: clinicDataList) => {
    const regionFilteredClinics = clinicDataList.filter((clinic) => {
      return multiselectValues.includes(clinic.region)
    })
    return regionFilteredClinics
  }
  const handleSearch = () => {
    let searchedClinics = filterFemalePrac(clinicDataList)
    setFilteredSearch(false)
    if (multiselectValues.length != 0) {
      searchedClinics = filterRegion(searchedClinics)
      setFilteredSearch(true)
    }
    setClinics(searchedClinics.sort(sortByRating))
    console.log(searchedClinics)
  }
  const [multiselectValues, setMultiSelectValues] = useState([])
  const [female, setFemale] = useState(false)
  const [clinics, setClinics] = useState(clinicDataList.sort(sortByRating))
  const [filteredSeach, setFilteredSearch] = useState(false)
  useEffect(handleSearch, [multiselectValues, female])
  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const showClinicCopy = () => {
    if (multiselectValues.length == 1) {
      return `Clinics providing women's health services in ${multiselectValues[0]} Singapore`
    } else {
      const shortArr = multiselectValues.slice(0, -1)
      const regions = shortArr
        .map((region) => {
          return `${region}`
        })
        .join(', ')
      console.log(regions)
      return `Clinics providing women's health services in ${regions} and ${
        multiselectValues.slice(-1)[0]
      } Singapore`
    }
  }

  return (
    <>
      <LandingSection bg="#FFFFFF" pt={{ base: '3rem', md: '10rem' }} px={0}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="left"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1} px={{ base: '0rem', md: '4rem' }}>
            <Text
              as="h1"
              textStyle={{
                base: 'responsive-display.heavy',
                md: 'responsive-heading.light-480',
              }}
              textAlign={{ base: 'left', md: 'center' }}
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
                colorScheme="pink"
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
                  console.log(e)
                  setMultiSelectValues([...e])
                }}
                values={multiselectValues}
              />
            </Box>

            <Box mt="1rem">
              <Button w="100%" onClick={handleClick}>
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
          <Flex flexDir="column" flex={1} ref={ref}>
            <Text as="h1" textStyle={'h4'} color="base.content.strong">
              {filteredSeach
                ? showClinicCopy()
                : 'Find a clinic that meets your needs based on our verified reviews'}
            </Text>
            <SectionBodyText mt="0.5rem">
              Select a clinic to read their reviews
            </SectionBodyText>
            <Box pt={'2rem'}>
              <Toggle
                description=""
                label="View clinics with female practitioners"
                onChange={() => {
                  setFemale((female) => !female)
                }}
              />
            </Box>
            <ClinicList clinics={clinics} />
          </Flex>
        </Stack>
      </LandingSection>
    </>
  )
}

export default LandingPage
