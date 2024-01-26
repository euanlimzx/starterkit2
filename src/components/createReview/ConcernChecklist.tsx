import { Box, Button, Checkbox, Text, Textarea } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { trpc } from '~/utils/trpc'
import Checklist from './Checklist'
import ReviewTextArea from './ReviewTextArea'
import { update } from 'lodash'
import { clinicRouter } from '~/server/modules/clinic/clinic.router'

function ConcernChecklist({ clinicId }: { clinicId: string }) {
  const router = useRouter()
  const isVerified = useSearchParams().get('verified') ? true : false

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
  const concernRef = useRef(null)
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
  const textAreaRef = useRef(null)
  const submitReview = trpc.review.createReview.useMutation()
  const summariseReviews = trpc.clinic.summariseReviews.useMutation()
  const updateConcerns = trpc.review.updateConcernValues.useMutation()
  const handleSubmit = async () => {
    if (concernValues.length == 0 && otherContent.length == 0) {
      setConcernChecklistInvalid(true)
      concernRef.current?.scrollIntoView({ behavior: 'smooth' })
      console.log('invalid concerns')
      return
    }
    if (reviewContent.length == 0) {
      setTextAreaIsInvalid(true)
      textAreaRef.current?.scrollIntoView({ behavior: 'smooth' })
      console.log('invalid reviewContent')
      return
    }
    if (other && otherContent.length != 0) {
      const submittedReview = await submitReview.mutateAsync({
        // console.log({
        clinicId: clinicId,
        negSentiment: false,
        verified: isVerified,
        concernValues: concernValues,
        others: otherContent,
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      })
      console.log(submittedReview)
    } else {
      const submittedReview = await submitReview.mutateAsync({
        // console.log({
        clinicId: clinicId,
        negSentiment: true,
        verified: isVerified,
        concernValues: concernValues,
        others: '',
        descriptionValues: descriptionValues,
        reviewContent: reviewContent,
      })
      console.log(submittedReview)
    }

    await router.push(`/review/thankyou/${clinicId}`)
    const updatedConcernValues = await updateConcerns.mutateAsync({
      concernValues: concernValues,
      clinicId: clinicId,
    })
    console.log(updatedConcernValues)
    const summarised = await summariseReviews.mutateAsync({
      clinicId: clinicId,
    })
    console.log(summarised)
  }

  return (
    <>
      <Box shadow={'sm'} p={'1.5rem'} mb={'1rem'} borderRadius={'0.5rem'}>
        <Text textStyle={'subhead-1'} pb={'1rem'} ref={concernRef}>
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
          mt={'0.75rem'}
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
      <Box ref={textAreaRef}></Box>
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
          }}
          width={'100%'}
          size="lg"
          textColor={'white'}
        >
          Submit Review
        </Button>
      </Box>
    </>
  )
}

export default ConcernChecklist
