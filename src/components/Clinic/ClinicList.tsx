import { Box } from '@chakra-ui/react'
import ClinicCard from './ClinicCard'
import type { clinicDataList } from '~/pages'

const ClinicList = ({ clinics }: { clinics: clinicDataList }) => {
  return (
    <Box pt={'1rem'}>
      {clinics.map((clinic) => {
        return <ClinicCard key={clinic.id} clinicData={clinic} />
      })}
    </Box>
  )
}

export default ClinicList
