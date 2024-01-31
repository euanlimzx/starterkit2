import { Box, Flex, Stack, Text, Button, Image } from '@chakra-ui/react'
import { MultiSelect, Toggle } from '@opengovsg/design-system-react'
import { useEffect, useState } from 'react'
import ClinicList from '~/components/Clinic/ClinicList'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import { trpc } from '~/utils/trpc'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import Checklist from '~/components/createReview/Checklist'

export type Clinic = {
  id: string
  name: string
  address: string
  femalePrac: boolean
  rating: string
  negSentiment: boolean
  region: string
  specialReview: string
  clinicConcerns: string[]
}

export type clinicDataList = Clinic[]

const LandingPage = () => {
  // let clinicDataList = [
  //   {
  //     id: '61f4d8d9-4acc-47db-b874-2f4460717792',
  //     name: 'Jimmy Teng Medical Clinic',
  //     address: '42 Willow Lane #305 Greenwood Heights FA 54321',
  //     femalePrac: false,
  //     rating: '48',
  //     negSentiment: true,
  //     region: 'West',
  //     specialReview:
  //       'Not the best, doctor was a tad bit insensitive and stubborn',
  //     clinicConcerns: ['General Health', 'Acne/Hormones'],
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
  //     clinicConcerns: ['Pregnancy'],
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
  //     clinicConcerns: ['General Fertility'],
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
  //     clinicConcerns: ['General Health', 'PCOS'],
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
  //     clinicConcerns: ['Acne/Hormones'],
  //   },
  // ]

  //for location shit
  const [locations, setLocations] = useState([])
  const locationsList = ['Central', 'North', 'East', 'West', 'Northeast']
  const { isOpen, onOpen, onClose } = useDisclosure()
  const clinicDataList = trpc.clinic.fetchClinics.useSuspenseQuery()[0]

  const showClinicCopy = () => {
    if (multiselectValues.length == 1) {
      return `Clinics serving ${multiselectValues[0]} concerns`
    } else {
      const shortArr = multiselectValues.slice(0, -1)
      const regions = shortArr
        .map((region) => {
          return `${region}`
        })
        .join(', ')

      return `Clinics serving ${regions} and ${
        multiselectValues.slice(-1)[0]
      } concerns`
    }
  }
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

  const filterConcern = (clinicDataList: clinicDataList) => {
    const concernFilteredClinics = clinicDataList.filter((clinic) => {
      return clinic.clinicConcerns.some((concern) =>
        multiselectValues.includes(concern)
      )
    })
    return concernFilteredClinics
  }

  const filterRegion = (clinicDataList: clinicDataList) => {
    const regionFilteredClinics = clinicDataList.filter((clinic) => {
      return locations.includes(clinic.region)
    })
    return regionFilteredClinics
  }

  const handleSearch = () => {
    let femaleFilteredClinics = filterFemalePrac(clinicDataList)
    setFilteredSearch(false)
    if (multiselectValues.length != 0) {
      femaleFilteredClinics = filterConcern(femaleFilteredClinics)
      setFilteredSearch(true)
    }
    let finalClinics = femaleFilteredClinics
    if (locations.length != 0) {
      finalClinics = filterRegion(femaleFilteredClinics)
    }
    setClinics(finalClinics.sort(sortByRating))
  }
  const [multiselectValues, setMultiSelectValues] = useState([])
  const [female, setFemale] = useState(false)
  const [clinics, setClinics] = useState(clinicDataList.sort(sortByRating))
  const [filteredSeach, setFilteredSearch] = useState(false)
  useEffect(handleSearch, [multiselectValues, female, locations])

  return (
    <>
      {' '}
      <Box mx={{ base: '0rem', md: '16rem' }}>
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
                Let&apos;s get you a doctor that women trust.
              </Text>
              <SectionBodyText
                mt="1rem"
                textAlign={{ base: 'left', md: 'center' }}
              >
                What problems are you currently facing?
              </SectionBodyText>
              <Box mt="2.5rem">
                <MultiSelect
                  colorScheme="pink"
                  placeholder={'Select one or more'}
                  items={[
                    {
                      value: 'General Health',
                    },
                    {
                      value: 'PCOS',
                    },
                    {
                      value: 'Pregnancy',
                    },
                    {
                      value: 'General Fertility',
                    },
                    {
                      value: 'Acne/Hormones',
                    },
                  ]}
                  name="ConcernSelect"
                  onChange={(e) => {
                    console.log(e)
                    setMultiSelectValues([...new Set(e)])
                  }}
                  values={multiselectValues}
                />
              </Box>
            </Flex>
          </Stack>
        </LandingSection>
      </Box>
      <LandingSection pt={{ base: '2rem', md: '4rem' }} px={0}>
        <Box mx={{ base: '0rem', md: '16rem' }}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
          >
            <Flex flexDir="column" flex={1}>
              <Text as="h1" textStyle={'h4'} color="base.content.strong">
                {filteredSeach
                  ? showClinicCopy()
                  : 'Find empathetic and knowledgeable doctors based on our verified reviews'}
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
              <Box
                display="flex"
                justifyContent={'end'}
                alignItems={'end'}
                py={'0.5rem'}
              >
                <Button
                  leftIcon={<HiAdjustmentsHorizontal fontSize="1.5rem" />}
                  variant={'clear'}
                  px={0}
                  onClick={onOpen}
                >
                  <Text textAlign={'end'}>Filter results</Text>
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>Filter by location</ModalHeader>
                    <ModalBody>
                      <Checklist
                        ChecklistIsInvalid={false}
                        checklistList={locationsList}
                        checklistValues={locations}
                        setChecklistValues={setLocations}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button textColor={'white'} mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>

              <ClinicList clinics={clinics} />
            </Flex>
          </Stack>
        </Box>
      </LandingSection>
    </>
  )
}

export default LandingPage
