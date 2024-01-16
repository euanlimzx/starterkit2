import { Flex, Stack, Text, Box, Button } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import NextLink from 'next/link'

const allClinics = () => {
  return (
    <LandingSection
      bg="base.canvas.brand-subtle"
      pt={{ base: '2rem', md: 0 }}
      px={0}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align="center"
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
            This is where we will be displaying a list of clinics
          </Text>
          <SectionBodyText mt="1rem">
            [TODO] API Fetch route to list all clinics <br /> [TODO] Some sort
            of search / filter function to sort out clinics
            <br />
            Users will be able to select a particular clinic to view more in
            depth, this is the route they will take (button below)
          </SectionBodyText>
          <Box mt="2.5rem">
            <Button
              as={NextLink}
              href={'/clinics/12345'}
              rightIcon={<BiRightArrowAlt fontSize="1.5rem" />}
            >
              Example view of a clinic
            </Button>
          </Box>
        </Flex>
      </Stack>
    </LandingSection>
  )
}

export default allClinics
