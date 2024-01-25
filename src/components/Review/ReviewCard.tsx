import { Box, Stack, Text, Icon, Alert, AlertIcon, Tag } from '@chakra-ui/react'
import { MdVerified } from 'react-icons/md'
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
    <Box pt={'2.5rem'}>
      <Stack>
        <Box>
          {' '}
          {review.negSentiment ? (
            <Text fontSize="sm" color={'orange.300'} fontWeight={'bold'}>
              Mixed
            </Text>
          ) : (
            <Text fontSize="sm" color={'green.400'} fontWeight={'bold'}>
              Positive
            </Text>
          )}
          {review.verified ? (
            <>
              <Box display="flex" alignItems={'center'}>
                <Text
                  textStyle="caption-2"
                  color="brand.secondary.500"
                  as="span"
                >
                  {timeAgo(review.date)}
                  <TouchableTooltip
                    label="The reviewer has been verified to have visited the clinic"
                    placement={'top'}
                  >
                    <Icon
                      as={MdVerified}
                      aria-hidden
                      fontSize="1rem"
                      color="blue.500"
                      mx="0.25rem"
                    />
                  </TouchableTooltip>
                </Text>
              </Box>
            </>
          ) : (
            <>
              <Text fontSize="xs" color="brand.secondary.500">
                {timeAgo(review.date)}
              </Text>
            </>
          )}
        </Box>

        <Box>
          <Text
            textStyle={'caption-1'}
            fontWeight={'semibold'}
            color={'grey.500'}
          >
            Visited for:
          </Text>
          <Text textStyle={'caption-2'} color={'grey.400'}>
            {review.concernValues
              .map((concern) => {
                return `${concern}`
              })
              .join(', ')}
          </Text>
        </Box>
        <Text>{review.reviewContent}</Text>
        {review.descriptionValues && (
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
        )}
      </Stack>
    </Box>
  )
}

export default ReviewCard
