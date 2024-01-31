import {
  Box,
  FormControl,
  FormErrorMessage,
  Text,
  Textarea,
} from '@chakra-ui/react'

function ReviewTextArea({
  ReviewContent,
  setReviewContent,
  TextAreaIsInvalid,
}: {
  ReviewContent: string
  setReviewContent: React.Dispatch<React.SetStateAction<string>>
  TextAreaIsInvalid: boolean
}) {
  return (
    <>
      <FormControl isInvalid={TextAreaIsInvalid}>
        <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
          <Text textStyle={'subhead-1'}>
            Tell us more about your consultation with the doctor
          </Text>
          <Text textStyle={'body-2'} pt={'0.5rem'} pb={'1rem'}>
            What would you tell your friend if she said she was thinking about
            coming here?
          </Text>
          <FormErrorMessage>
            Can&apos;t leave this field blank!
          </FormErrorMessage>
          <Textarea
            focusBorderColor="brand.primary.500"
            onChange={(e) => {
              setReviewContent(e.target.value)
            }}
            placeholder="Do not disclose any personal information as this review will be made public"
            height={'auto'}
            rows={10}
            size={'xs'}
            maxLength={500}
          />
          <Text textStyle={'caption-2'} pt="0.5rem">
            {500 - ReviewContent.length} characters left
          </Text>
        </Box>
      </FormControl>
    </>
  )
}

export default ReviewTextArea
