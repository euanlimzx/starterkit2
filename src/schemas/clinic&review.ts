import { z } from 'zod'

export const createClinicSchema = z.object({
  name: z.string().min(1),
})

export const createReviewSchema = z.object({
  content: z.string().min(1),
  verified: z.boolean(),
  clinicId: z.string().min(1),
  userId: z.string().min(1),
})
