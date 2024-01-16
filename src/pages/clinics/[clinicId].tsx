import { Flex, Stack, Text, Box, Button } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import NextLink from 'next/link'

const clinic = () => {
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
            This is where we will be displaying details of a particular clinic
          </Text>
          <SectionBodyText mt="1rem">
            [TODO] API Fetch route to list details of one clinic + all the
            reviews <br /> [TODO] Some sort of review filtering function? <br />
            [TODO] From here, users are able to book appointment for this clinic
            directly from HAS
            <br />
            Users will be able to select a particular clinic to view more in
            depth, this is the route they will take (button below)
          </SectionBodyText>
          <Box mt="2.5rem">
            <Button
              as={NextLink}
              href={'/'}
              rightIcon={<BiRightArrowAlt fontSize="1.5rem" />}
            >
              Back to home
            </Button>
          </Box>
        </Flex>
      </Stack>
    </LandingSection>
  )
}

export default clinic
