//[done] create a review
//[done] fetch existing users (i js put in here for convenience woops)
import { createReviewSchema } from '~/schemas/clinic&review'
import { publicProcedure, router } from '~/server/trpc'
import OpenAI from 'openai'
import { env } from '~/env.mjs'
import { z } from 'zod'

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
})

export const reviewRouter = router({
  createReview: publicProcedure
    .input(createReviewSchema)
    .mutation(async ({ input, ctx }) => {
      const chatgpt = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages: [
          {
            role: 'user',
            content: `Classify the following phrase. ${input.reviewContent}`,
          },
        ],
        functions: [
          {
            name: 'classify_user_input',
            description: 'Classify the relevant information from the phrase.',
            parameters: {
              type: 'object',
              properties: {
                sentiment: {
                  type: 'string',
                  description:
                    'The sentiment of the phrase. Should be either "positive" or "notPositive".',
                  enum: ['positive', 'notPositive'],
                },
              },
              required: ['sentiment'],
            },
          },
        ],
      })

      const sentimentString = JSON.parse(
        chatgpt.choices[0]?.message.function_call?.arguments
      ).sentiment

      let negSentiment = false
      if (sentimentString == 'positive') {
        negSentiment = false
      } else if (sentimentString == 'notPositive') {
        negSentiment = true
      }

      const createdReview = await ctx.prisma.review.create({
        data: {
          verified: input.verified,
          clinicId: input.clinicId,
          concernValues: input.concernValues,
          others: input.others,
          descriptionValues: input.descriptionValues,
          negSentiment: negSentiment,
          reviewContent: input.reviewContent,
        },
      })
      return createdReview
    }),
  getSentiment: publicProcedure
    .input(z.object({ phrase: z.string() }))
    .query(async ({ input }) => {
      const chatgpt = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages: [
          {
            role: 'user',
            content: `Classify the following phrase. ${input.phrase}`,
          },
        ],
        functions: [
          {
            name: 'classify_user_input',
            description: 'Classify the relevant information from the phrase.',
            parameters: {
              type: 'object',
              properties: {
                sentiment: {
                  type: 'string',
                  description:
                    'The sentiment of the phrase. Should be either "positive" or "notPositive".',
                  enum: ['positive', 'notPositive'],
                },
              },
              required: ['sentiment'],
            },
          },
        ],
      })

      const sentimentString = JSON.parse(
        chatgpt.choices[0]?.message.function_call?.arguments
      ).sentiment
      console.log(typeof sentimentString, sentimentString)
      return sentimentString
    }),
})
