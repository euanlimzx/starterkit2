import { Flex, Stack, Text, Box, Button } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import NextLink from 'next/link'

const createReview = () => {
  return (
    <LandingSection bg="#FFFFFF" pt={{ base: '2rem' }} px={0}>
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
            In an ideal world, this button would bring you to HAS
          </Text>
          <SectionBodyText mt="1rem">
            and then you can book an appointment directly with a clinic from
            there!
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

export default createReview
