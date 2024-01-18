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

const ClinicCard = () => {
  return (
    <Box p={'0.5rem'}>
      <Card shadow="md">
        <CardBody>
          <Box>
            <Text fontSize="xs" color={'green.300'}>
              98% Positive Reviews
            </Text>
            <Heading size="md" my={'5px'}>
              Lee Medical Clinic
            </Heading>
            <Tag colorScheme="gray" borderRadius={'2rem'}>
              Female practitioner available
            </Tag>
            <Stack direction={'row'} my={'10px'}>
              <Icon as={BiMapPin} aria-hidden fontSize="1.25rem" mr="0.25rem" />
              <Text fontSize="sm">
                115b Alkaff Crescent #01-05 S342115
              </Text>{' '}
            </Stack>
          </Box>
        </CardBody>
      </Card>
    </Box>
  )
}

export default ClinicCard
