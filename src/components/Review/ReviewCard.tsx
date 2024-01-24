import { Box, Stack, Text, Icon, Alert, AlertIcon, Tag } from '@chakra-ui/react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import {
  TouchableTooltip,
  TouchableTooltipProps,
} from '@opengovsg/design-system-react'
import type { review } from '~/pages/clinics/[clinicId]'
const ReviewCard = ({ review }: { review: review }) => {
  function timeAgo(date: Date) {
    const currentDate = new Date()
    const timestamp = date.getTime()
    const currentTimestamp = currentDate.getTime()
    const difference = currentTimestamp - timestamp

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (years > 0) {
      return years === 1 ? '1 year ago' : `${years} years ago`
    } else if (months > 0) {
      return months === 1 ? '1 month ago' : `${months} months ago`
    } else {
      return days <= 1 ? '1 day ago' : `${days} days ago`
    }
  }

  return (
    <Box pb={'1.5rem'}>
      <Stack>
        {review.negSentiment ? (
          <Text fontSize="sm" color={'orange.300'} fontWeight={'bold'}>
            Mixed
          </Text>
        ) : (
          <Text fontSize="sm" color={'green.300'} fontWeight={'bold'}>
            Positive
          </Text>
        )}
        {review.verified ? (
          <>
            <Stack direction={'row'} align={'center'} fontSize="md">
              <Text fontWeight={'bold'}>Verified Reviewer</Text>
            </Stack>
            <Text fontSize="xs" color="brand.secondary.500">
              {timeAgo(review.date)}
            </Text>
          </>
        ) : (
          <>
            <Stack direction={'row'} align={'center'} fontSize="md">
              <Text fontWeight={'bold'}>Non-verified Reviewer</Text>
              <TouchableTooltip
                label="We couldn't verify if this reviewer visited the clinic"
                placement={'top'}
              >
                <Icon
                  as={BsFillQuestionCircleFill}
                  aria-hidden
                  fontSize="1rem"
                />
              </TouchableTooltip>
            </Stack>
            <Text fontSize="xs" color="brand.secondary.500">
              {timeAgo(review.date)}
            </Text>
          </>
        )}

        <Text>{review.reviewContent}</Text>
        <Box>
          {review.concernValues.map((tag, index) => {
            return (
              <Tag
                colorScheme="gray"
                borderRadius={'2rem'}
                mx="2px"
                my="4px"
                key={index}
              >
                {tag}
              </Tag>
            )
          })}
        </Box>
        <Box>
          {review.descriptionValues.map((tag, index) => {
            return (
              <Tag
                colorScheme="gray"
                borderRadius={'2rem'}
                mx="2px"
                my="4px"
                key={index}
              >
                {tag}
              </Tag>
            )
          })}
        </Box>
      </Stack>
    </Box>
  )
}

export default ReviewCard
