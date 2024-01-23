import ReviewCard from './ReviewCard'
import type { reviewList } from '~/pages/clinics/[clinicId]'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
const ReviewList = ({ reviewList }: { reviewList: reviewList }) => {
  const [showMore, setShowMore] = useState(false)
  if (reviewList.length <= 3) {
    return (
      <>
        {reviewList.map((review) => {
          return <ReviewCard review={review} key={review.id} />
        })}
      </>
    )
  } else {
    return (
      <>
        {reviewList.slice(0, 3).map((review) => {
          return <ReviewCard review={review} key={review.id} />
        })}
        {showMore ? (
          reviewList.slice(4, reviewList.length + 1).map((review) => {
            return <ReviewCard review={review} key={review.id} />
          })
        ) : (
          <Button
            w="100%"
            variant={'outline'}
            mt={'1rem'}
            onClick={() => {
              setShowMore((showMore) => !showMore)
            }}
          >
            Load more reviews
          </Button>
        )}
      </>
    )
  }
}

export default ReviewList
