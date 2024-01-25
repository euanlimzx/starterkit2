import { Box, Button, Stack } from '@chakra-ui/react'
import ClinicCard from './ClinicCard'
import type { clinicDataList } from '~/pages'
import { useState } from 'react'

const ClinicList = ({ clinics }: { clinics: clinicDataList }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        pt={'1rem'}
        spacing={{ base: 2, md: 5 }}
        height={'100%'}
        justifyContent={'center'}
      >
        {clinics.map((clinic) => {
          return <ClinicCard key={clinic.id} clinicData={clinic} />
        })}
      </Stack>
    </>
  )
}

export default ClinicList
