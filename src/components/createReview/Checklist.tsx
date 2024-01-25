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
import ReviewTextArea from './ReviewTextArea'

function Checklist({
  ChecklistIsInvalid,
  checklistList,
  checklistValues,
  setChecklistValues,
}: {
  ChecklistIsInvalid: boolean
  checklistList: string[]
  checklistValues: string[]
  setChecklistValues: React.Dispatch<React.SetStateAction<string[]>>
}) {
  return (
    <FormControl isInvalid={ChecklistIsInvalid}>
      <FormErrorMessage>Please answer this question.</FormErrorMessage>
      <CheckboxGroup
        value={checklistValues}
        onChange={(e) => {
          setChecklistValues(e)
        }}
      >
        <Stack>
          {checklistList.map((checklistItem) => {
            return (
              <Checkbox key={checklistItem} value={`${checklistItem}`}>
                {checklistItem}
              </Checkbox>
            )
          })}
        </Stack>
      </CheckboxGroup>
    </FormControl>
  )
}

export default Checklist
