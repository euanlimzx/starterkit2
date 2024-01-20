import ReviewCard from './ReviewCard'
import type { reviewList } from '~/pages/clinics/[clinicId]'

const ReviewList = ({ reviewList }: { reviewList: reviewList }) => {
  return (
    <>
      {reviewList.map((review) => {
        return <ReviewCard review={review} key={review.id} />
      })}
    </>
  )
}

export default ReviewList
