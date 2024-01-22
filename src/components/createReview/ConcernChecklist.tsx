import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

function ConcernChecklist({ clinicId }: { clinicId: string }) {
  const router = useRouter(0)
  // first section
  const [concernValues, setConcernValues] = useState([])
  const [other, setOther] = useState(false)
  const [otherContent, setOtherContent] = useState('')
  const [reviewContent, setReviewContent] = useState('')
  //second section
  const [descriptionValues, setDescriptionValues] = useState([])
  const handleSubmit = () => {
    if (other) {
      const newConcernValues = [...concernValues, otherContent]
      return {
        clinicId: clinicId,
        verified: false,
        concernValues: newConcernValues,
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      }
    } else {
      return {
        clinicId: clinicId,
        verified: false,
        concernValues: concernValues,
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      }
    }
  }

  return (
    <>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'}>
          Which concern(s) do you think the doctor was able to address?
        </Text>
        <CheckboxGroup
          value={concernValues}
          onChange={(e) => {
            setConcernValues(e)
          }}
        >
          <Stack>
            <Checkbox value="General Health">General Health</Checkbox>
            <Checkbox value="PCOS">PCOS</Checkbox>
            <Checkbox value="Pregnancy">Pregnancy</Checkbox>
            <Checkbox value="General fertility">General fertility</Checkbox>
            <Checkbox value="Acne / Hormones">Acne / Hormones</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Checkbox
          onChange={() => {
            setOther((other) => !other)
          }}
        >
          Other
        </Checkbox>
        {other && (
          <Textarea
            onChange={(e) => {
              setOtherContent(e.target.value)
            }}
            placeholder="Please specify"
            mt="0.5rem"
          />
        )}
      </Box>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'}>
          How would you describe your consultation?
        </Text>
        <CheckboxGroup
          value={descriptionValues}
          onChange={(e) => {
            setDescriptionValues(e)
          }}
        >
          <Stack>
            <Checkbox value="Communicative">Communicative</Checkbox>
            <Checkbox value="Knowledgeable">Knowledgeable</Checkbox>
            <Checkbox value="Empathetic">Empathetic</Checkbox>
            <Checkbox value="Non-judgemental">Non-judgemental</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'}>
          What other comments do you have about your visit?
        </Text>
        <Text textStyle={'body-2'} pb={'1rem'}>
          What would you tell your friend if she said she was thinking about
          coming here?
        </Text>
        <Textarea
          onChange={(e) => {
            setReviewContent(e.target.value)
          }}
          placeholder="Do not disclose any personal information as this review will be made public"
          mt="0.5rem"
          size="xs"
        />
      </Box>
      <Box>
        <Text textAlign={'center'} py={'2rem'}>
          This review will appear anonymously
        </Text>
        <Button
          onClick={() => {
            console.log(handleSubmit())
            router.push(`/review/thankyou/${clinicId}`)
          }}
          width={'100%'}
          size="lg"
        >
          Submit Review
        </Button>
      </Box>
    </>
  )
}

export default ConcernChecklist
