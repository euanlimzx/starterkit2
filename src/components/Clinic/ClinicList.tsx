import { Box } from '@chakra-ui/react'
import ClinicCard from './ClinicCard'
const ClinicList = () => {
  return (
    <Box pt={'1rem'}>
      <ClinicCard />
      <ClinicCard />
      <ClinicCard />
    </Box>
  )
}

export default ClinicList
