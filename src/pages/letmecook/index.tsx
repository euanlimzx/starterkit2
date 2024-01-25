import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import {
  MultiSelect,
  Toggle,
  Button,
  Tag,
} from '@opengovsg/design-system-react'
import { useEffect, useState } from 'react'
import ClinicList from '~/components/Clinic/ClinicList'
import { LandingSection, SectionBodyText } from '~/features/landing/components'
import { trpc } from '~/utils/trpc'
import { FaArrowRight } from 'react-icons/fa'
import First from '~/components/letmecook/First'
import Second from '~/components/letmecook/Second'
import ClinicRow from '~/components/Clinic/ClinicRow'
import Third from '~/components/letmecook/Third'

const Page = () => {
  const clinicDataList = [
    {
      id: '61f4d8d9-4acc-47db-b874-2f4460717792',
      name: 'Jimmy Teng Medical Clinic',
      address: '42 Willow Lane #305 Greenwood Heights FA 54321',
      femalePrac: true,
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
  ]
  return (
    <>
      <First />
      <Second />
      <Third />
    </>
  )
}

export default Page
