import { Box } from '@chakra-ui/react'
import ClinicCard from './ClinicCard'
const ClinicList = () => {
  const clinicData1 = {
    id: 'afa65154-6fd6-41e1-9920-8f4004b0778a',
    name: 'Lee Hee Medical Clinic',
    address: '115b Alkaff Crescent #01-05 S342115',
    femalePrac: true,
    rating: '98',
    negSentiment: false,
    region: 'east',
    specialReview: 'i fill up later',
  }
  const clinicData2 = {
    id: '61f4d8d9-4acc-47db-b874-2f4460717792',
    name: 'Jimmy Teng Medical Clinic',
    address: '42 Willow Lane #305 Greenwood Heights FA 54321',
    femalePrac: false,
    rating: '48',
    negSentiment: true,
    region: 'west',
    specialReview: 'i fill up later',
  }
  return (
    <Box pt={'1rem'}>
      <ClinicCard clinicData={clinicData1} />
      <ClinicCard clinicData={clinicData2} />
      <ClinicCard clinicData={clinicData1} />
    </Box>
  )
}

export default ClinicList
