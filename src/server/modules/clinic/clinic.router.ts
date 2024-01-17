//[done]fetch all clinics
//filter available clinics based on search or something
//[done] fetch one clinic based on id with all their reviews
//[done] create a clinic for mock data purposes

import { createClinicSchema } from '~/schemas/clinic&review'
import { publicProcedure, router } from '~/server/trpc'
import { z } from 'zod'

export const clinicRouter = router({
  createClinic: publicProcedure
    .input(createClinicSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.clinic.create({
        data: {
          name: input.name,
        },
      })
    }),
  fetchClinics: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.clinic.findMany()
  }),
  fetchClinicById: publicProcedure
    .input(
      z.object({
        clinicId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.clinic.findUnique({
        where: {
          id: input.clinicId,
        },
        include: {
          reviews: true,
        },
      })
    }),
})
