import { Box, Button } from '@chakra-ui/react'
import ClinicCard from './ClinicCard'
import type { clinicDataList } from '~/pages'
import { useState } from 'react'

const ClinicList = ({ clinics }: { clinics: clinicDataList }) => {
  const [showMore, setShowMore] = useState(false)

  if (clinics.length <= 3) {
    return (
      <>
        <Box pt={'1rem'}>
          {clinics.map((clinic) => {
            return <ClinicCard key={clinic.id} clinicData={clinic} />
          })}
        </Box>
      </>
    )
  } else {
    return (
      <>
        <Box pt={'1rem'}>
          {clinics.slice(0, 3).map((clinic) => {
            return <ClinicCard key={clinic.id} clinicData={clinic} />
          })}
        </Box>
        {showMore ? (
          clinics.slice(3, clinics.length + 1).map((clinic) => {
            return <ClinicCard key={clinic.id} clinicData={clinic} />
          })
        ) : (
          <Box mt="2.5rem">
            <Button
              width="100%"
              variant="outline"
              onClick={() => {
                setShowMore((showMore) => {
                  return !showMore
                })
              }}
            >
              Show me more clinics
            </Button>
          </Box>
        )}
      </>
    )
  }
}

export default ClinicList
