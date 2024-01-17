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
          content: input.content,
          verified: input.verified,
          clinicId: input.clinicId,
          userId: input.userId,
        },
      })
    }),
  fetchUsers: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany()
  }),
})
