import {
  Card,
  CardBody,
  Text,
  Heading,
  Tag,
  Box,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { BiMapPin } from 'react-icons/bi'
import { useRouter } from 'next/router'
//add type definition
const ClinicCard = (props) => {
  const router = useRouter()
  const clinicData = props.clinicData
  return (
    <Box
      py={'0.5rem'}
      onClick={() => router.push(`/clinics/${clinicData.id}`)}
      cursor={'pointer'}
    >
      <Card shadow="md">
        <CardBody>
          <Box>
            {clinicData.negSentiment ? (
              <Text fontSize="sm" color={'yellow.500'}>
                {` ${clinicData.rating}% positive reviews`}
              </Text>
            ) : (
              <Text fontSize="sm" color={'green.500'}>
                {` ${clinicData.rating}% positive reviews`}
              </Text>
            )}

            <Heading size="md" my={'5px'}>
              {clinicData.name}
            </Heading>
            {clinicData.femalePrac ? (
              <Tag colorScheme="gray" borderRadius={'2rem'}>
                Female practitioner available
              </Tag>
            ) : null}
            <Stack direction={'row'} my={'10px'}>
              <Icon as={BiMapPin} aria-hidden fontSize="1.25rem" mr="0.25rem" />
              <Text fontSize="sm">{clinicData.address}</Text>
            </Stack>
          </Box>
        </CardBody>
      </Card>
    </Box>
  )
}

export default ClinicCard
