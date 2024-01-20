import { Flex, Stack, Text, Box, Button } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import NextLink from 'next/link'

const createReview = () => {
  return (
    <LandingSection bg="#FFFFFF" pt={{ base: '2rem', md: 0 }} px={0}>
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
            Ideally, this will bring you to HAS
          </Text>
          <SectionBodyText mt="1rem">
            lets link this to a Figma preview if possible
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
