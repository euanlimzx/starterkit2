//[done] create a review
//[done] fetch existing users (i js put in here for convenience woops)
import { createReviewSchema } from '~/schemas/clinic&review'
import { publicProcedure, router } from '~/server/trpc'

export const reviewRouter = router({
  createReview: publicProcedure
    .input(createReviewSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.review.create({
        data: {
          verified: input.verified,
          clinicId: input.clinicId,
          concernValues: input.concernValues,
          descriptionValues: input.descriptionValues,
          negSentiment: false,
          reviewContent: input.reviewContent,
        },
      })
    }),
})

// model Review {
//   id                String   @id @default(cuid())
//   verified          Boolean
//   clinicId          String
//   concernValues     String[]
//   descriptionValues String[]
//   date              DateTime @default(now())
//   negSentiment      Boolean
//   reviewContent     String
//   clinic            Clinic   @relation(fields: [clinicId], references: [id])
// }
