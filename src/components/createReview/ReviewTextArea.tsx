import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  Textarea,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { trpc } from '~/utils/trpc'

function ReviewTextArea({
  ReviewContent,
  setReviewContent,
  TextAreaIsInvalid,
}) {
  return (
    <>
      <FormControl isInvalid={TextAreaIsInvalid}>
        <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
          <Text textStyle={'subhead-1'} pb={'1rem'}>
            What other comments do you have about your visit?
          </Text>
          <Text textStyle={'body-2'} pb={'1rem'}>
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
            maxLength={200}
          />
          <Text textStyle={'caption-2'} pt="0.5rem">
            {200 - ReviewContent.length} characters left
          </Text>
        </Box>
      </FormControl>
    </>
  )
}

export default ReviewTextArea
