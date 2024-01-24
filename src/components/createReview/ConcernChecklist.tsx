import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  Textarea,
  FormControl,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { trpc } from '~/utils/trpc'
import ReviewTextArea from './ReviewTextArea'
import Checklist from './Checklist'

function ConcernChecklist({ clinicId }: { clinicId: string }) {
  const router = useRouter()
  // first section
  const [concernChecklistInvalid, setConcernChecklistInvalid] = useState(false)
  const [concernValues, setConcernValues] = useState([])
  const concernList = [
    'General Health',
    'PCOS',
    'Pregnancy',
    'General Fertility',
    'Acne/Hormones',
  ]
  //other section
  const [other, setOther] = useState(false)
  const [otherContent, setOtherContent] = useState('')
  //second section
  const [descriptionValues, setDescriptionValues] = useState([])
  const descriptionList = [
    'Communicative',
    'Knowledgeable',
    'Empathetic',
    'Non-judgemental',
  ]
  //third section
  const [reviewContent, setReviewContent] = useState('')
  const [TextAreaIsInvalid, setTextAreaIsInvalid] = useState(false)

  const submitReview = trpc.review.createReview.useMutation()
  const handleSubmit = () => {
    if (concernValues.length == 0 && otherContent.length == 0) {
      setConcernChecklistInvalid(true)
      console.log('invalid concerns')
      return
    }
    if (reviewContent.length == 0) {
      setTextAreaIsInvalid(true)
      console.log('invalid review')
      return
    }
    if (other && otherContent.length != 0) {
      return submitReview.mutateAsync({
        // console.log({
        clinicId: clinicId,
        negSentiment: false,
        verified: false,
        concernValues: concernValues,
        // otherConcerns: otherContent,
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      })
    } else {
      return submitReview.mutateAsync({
        // console.log({
        clinicId: clinicId,
        negSentiment: true,
        verified: false,
        concernValues: concernValues,
        // otherConcerns: '',
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      })
    }
  }

  return (
    <>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'}>
          Which concern(s) do you think the doctor was able to address?
        </Text>
        <Checklist
          checklistList={concernList}
          checklistValues={concernValues}
          setChecklistValues={setConcernValues}
          ChecklistIsInvalid={concernChecklistInvalid}
        />
        <Checkbox
          onChange={() => {
            setOther((other) => !other)
          }}
        >
          Other
        </Checkbox>
        {other && (
          <>
            <Textarea
              onChange={(e) => {
                setOtherContent(e.target.value)
              }}
              height={'auto'}
              rows={1}
              maxLength={20}
              placeholder="Please specify"
              mt="0.5rem"
            />
            <Text textStyle={'caption-2'} pt="0.5rem">
              {20 - otherContent.length} characters left
            </Text>
          </>
        )}
      </Box>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'}>
          How would you describe your consultation?
        </Text>
        <Checklist
          checklistValues={descriptionValues}
          setChecklistValues={setDescriptionValues}
          checklistList={descriptionList}
          ChecklistIsInvalid={false}
        />
      </Box>
      <ReviewTextArea
        ReviewContent={reviewContent}
        setReviewContent={setReviewContent}
        TextAreaIsInvalid={TextAreaIsInvalid}
      />

      <Box>
        <Text textAlign={'center'} py={'2rem'}>
          This review will appear anonymously
        </Text>
        <Button
          onClick={async () => {
            await handleSubmit()
            await router.push(`/review/thankyou/${clinicId}`)
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
