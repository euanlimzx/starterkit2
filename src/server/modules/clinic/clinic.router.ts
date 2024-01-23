//[done]fetch all clinics
//filter available clinics based on search or something
//[done] fetch one clinic based on id with all their reviews
//[done] create a clinic for mock data purposes

import { createClinicSchema } from '~/schemas/clinic&review'
import { publicProcedure, router } from '~/server/trpc'
import { z } from 'zod'

export const clinicRouter = router({
  createManyClinics: publicProcedure.mutation(async ({ ctx }) => {
    await ctx.prisma.clinic.createMany({
      data: [
        {
          id: '61f4d8d9-4acc-47db-b874-2f4460717792',
          name: 'Jimmy Teng Medical Clinic',
          address: '42 Willow Lane #305 Greenwood Heights FA 54321',
          femalePrac: false,
          rating: '48',
          negSentiment: true,
          region: 'West',
          specialReview:
            'Not the best, doctor was a tad bit insensitive and stubborn',
        },
        {
          id: '72c3eaa0-8f57-4a8f-b4a2-9f830cc6b381',
          name: 'Marys Wellness Center',
          address: '789 Pine Street #02-15 Maple Grove XY 98765',
          femalePrac: true,
          rating: '56',
          negSentiment: true,
          region: 'East',
          specialReview: 'Great service and friendly staff!',
        },
        {
          id: '90a2b1c3-6f87-402e-a8b3-5cf2f4c28a94',
          name: 'Green Meadows Healthcare',
          address: '123 Oak Avenue #10-02 Sunnydale BC 65432',
          femalePrac: true,
          rating: '72',
          negSentiment: false,
          region: 'North',
          specialReview: 'Highly recommended for their expertise!',
        },
        {
          id: 'c4f37e2b-1e6d-4678-aa0b-bb2d57828c6f',
          name: 'Central Wellness Clinic',
          address: '567 Elm Street #05-10 Riverside MN 87654',
          femalePrac: true,
          rating: '68',
          negSentiment: false,
          region: 'Central',
          specialReview: 'Professional and efficient services!',
        },
        {
          id: 'e25c12d0-6ff4-4e22-a550-9b2d8d172c36',
          name: 'Harmony Health Hub',
          address: '890 Birch Lane #08-01 Harmony Ville CA 34567',
          femalePrac: false,
          rating: '60',
          negSentiment: true,
          region: 'Northeast',
          specialReview: 'Needs improvement in customer service.',
        },
      ],
      skipDuplicates: true,
    })
  }),
  createClinic: publicProcedure
    .input(createClinicSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.clinic.create({
        data: {
          name: input.name,
          address: input.address,
          femalePrac: input.femalePrac,
          rating: input.rating,
          negSentiment: input.negSentiment,
          region: input.region,
          specialReview: input.specialReview,
        },
      })
    }),
  fetchClinics: publicProcedure.query(async ({ ctx }) => {
    console.log(await ctx.prisma.clinic.findMany())
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
