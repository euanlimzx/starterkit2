import { z } from 'zod'

export const createClinicSchema = z.object({
  name: z.string(),
  address: z.string(),
  femalePrac: z.boolean(),
  rating: z.string(),
  negSentiment: z.boolean(),
  region: z.string(),
  specialReview: z.string(),
})

export const createReviewSchema = z.object({
  verified: z.boolean(),
  negSentiment: z.boolean(),
  review: z.string().min(1),
  tags: z.string().array().optional(),
  date: z.string().datetime(),
  clinicId: z.string().min(1),
})
