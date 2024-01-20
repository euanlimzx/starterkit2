import { Box, Flex, Stack, Text, Icon } from '@chakra-ui/react'
import { Button, Searchbar } from '@opengovsg/design-system-react'
import NextLink from 'next/link'
import { SectionBodyText } from '~/features/landing/components'
import { LandingSection } from '~/features/landing/components/LandingSection'
import { FiThumbsUp } from 'react-icons/fi'
import { BiMapPin } from 'react-icons/bi'
import { useState } from 'react'

const Page = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <LandingSection bg="#FFFFFF" pt={{ base: '5rem', md: '6rem' }} px={0}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align="left"
          spacing={{ base: '1.5rem', md: '3.125rem', lg: '7.5rem' }}
        >
          <Flex flexDir="column" flex={1}>
            <Box alignItems={'start'}></Box>

            <Text as="h1" textStyle={'h3-semibold'} pt="1rem">
              Find a clinic to review
            </Text>
            <Box my={'1rem'}>
              <Searchbar
                defaultIsExpanded
                onExpansion={function Ha() {}}
                onSearch={function Ha() {}}
                showClearButton={false}
                placeholder="Enter clinic name"
              />
            </Box>

            <Box>
              <Button w={'100%'} onClick={() => setToggle(!toggle)}>
                Search clinics
              </Button>
            </Box>
          </Flex>
        </Stack>
      </LandingSection>
      {toggle ? <ReviewInstructions /> : <ShowResults />}
    </>
  )
}

const ReviewInstructions = () => {
  return (
    <LandingSection bg="#FFFFFF" px={0} py={0}>
      <Stack direction={{ base: 'column', lg: 'row' }} align="left">
        <Flex flexDir="column" flex={1}>
          <Text as="h4" textStyle={'h5'}>
            How do I review a clinic?
          </Text>
          <Box my={'1rem'}>
            <Icon as={FiThumbsUp} aria-hidden fontSize="1.25rem" mr="0.25rem" />
            <Text fontSize="sm">
              Let others know what you liked about the clinic and your
              interaction with the doctor
            </Text>
          </Box>
          <Box my={'1rem'}>
            <Icon as={FiThumbsUp} aria-hidden fontSize="1.25rem" mr="0.25rem" />
            <Text fontSize="sm">
              Let others know what you liked about the clinic and your
              interaction with the doctor
            </Text>
          </Box>
          <Box my={'1rem'}>
            <Icon as={FiThumbsUp} aria-hidden fontSize="1.25rem" mr="0.25rem" />
            <Text fontSize="sm">
              Let others know what you liked about the clinic and your
              interaction with the doctor
            </Text>
          </Box>
        </Flex>
      </Stack>
    </LandingSection>
  )
}

const ShowResults = () => {
  return (
    <LandingSection bg="#FFFFFF" px={0} py={0}>
      <Stack direction={{ base: 'column', lg: 'row' }} align="left">
        <Flex flexDir="column" flex={1}>
          <Text as="h4" textStyle={'h5'}>
            Search results for &quot;Lee Medical Clinic&quot;
          </Text>
          <Box mt={'1.25rem'}>
            <Text fontWeight={'semibold'}>Lee Medical Clinic</Text>
            <Stack direction={'row'} my={'5px'} color={'brand.secondary.400'}>
              <Icon as={BiMapPin} aria-hidden fontSize="1.25rem" mr="0.25rem" />
              <Text fontSize="sm">115b Alkaff Crescent #01-05 S342115</Text>
            </Stack>
            <Box pt={'0.5rem'}>
              <Button
                w={'100%'}
                variant={'outline'}
                size={'md'}
                as={NextLink}
                href="/review"
              >
                Review this clinic
              </Button>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </LandingSection>
  )
}

export default Page
