import { Box, Stack, Text, Icon, Alert, AlertIcon, Tag } from '@chakra-ui/react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
const ReviewCard = () => {
  return (
    <Box py={'1.5rem'}>
      <Stack>
        <Text fontSize="sm" color={'green.300'} fontWeight={'bold'}>
          Positive
        </Text>
        <Stack direction={'row'} align={'center'} fontSize="md">
          <Text fontWeight={'bold'}>Verified Reviewer</Text>
          <Icon as={BsFillQuestionCircleFill} aria-hidden fontSize="1rem" />
        </Stack>
        <Text fontSize="xs" color="brand.secondary.500">
          2 weeks ago
        </Text>
        <Box p={'0.5rem'}>
          <Alert status="warning">
            <AlertIcon />
            This reviewer hasn&apos;t been verified as a visitor
          </Alert>
        </Box>

        <Text>
          The clinic was recommended to me by my gym and I found it great. Dr
          Tan has a surprisingly great “bedside manner” for a young doctor.
          Recommended course of action made an almost immediate improvement in
          the quality of life. Location is great, easy parking...
        </Text>
        <Box>
          <Tag colorScheme="gray" borderRadius={'2rem'} mx="2px" my="4px">
            Empathetic
          </Tag>
          <Tag colorScheme="gray" borderRadius={'2rem'} mx="2px" my="4px">
            Slow
          </Tag>
          <Tag colorScheme="gray" borderRadius={'2rem'} mx="2px" my="4px">
            Multiple treatment options available
          </Tag>
        </Box>
      </Stack>
    </Box>
  )
}

export default ReviewCard
