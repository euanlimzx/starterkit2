import { z } from 'zod'

export const createClinicSchema = z.object({
  name: z.string(),
  address: z.string(),
  femalePrac: z.boolean(),
  rating: z.string(),
  negSentiment: z.boolean(),
  region: z.string(),
  specialReview: z.string(),
  clinicConcerns: z.string().array(),
})

export const createReviewSchema = z.object({
  verified: z.boolean(),
  negSentiment: z.boolean(),
  reviewContent: z.string().min(1),
  concernValues: z.string().array().optional(),
  others: z.string(),
  descriptionValues: z.string().array().optional(),
  clinicId: z.string().min(1),
})
