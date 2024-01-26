//[done] create a review
//[done] fetch existing users (i js put in here for convenience woops)
import { createClinicSchema, createReviewSchema } from '~/schemas/clinic&review'
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
          clinicId: input.clinicId,
          verified: input.verified,
          concernValues: input.concernValues,
          others: input.others,
          descriptionValues: input.descriptionValues,
          negSentiment: negSentiment,
          reviewContent: input.reviewContent,
        },
      })
      return createdReview
    }),

  //add route to update concernValues
  updateConcernValues: publicProcedure
    .input(
      z.object({ concernValues: z.string().array(), clinicId: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      function combineListsWithoutRepeats(list1, list2) {
        const set1 = new Set(list1)
        const set2 = new Set(list2)
        const combinedSet = new Set([...set1, ...set2])
        const combinedList = Array.from(combinedSet)
        console.log(list1, list2, combinedList)
        return combinedList
      }
      const clinic = await ctx.prisma.clinic.findFirst({
        where: {
          id: input.clinicId,
        },
      })
      const clinicConcerns = combineListsWithoutRepeats(
        input.concernValues,
        clinic?.clinicConcerns
      )

      const updatedClinic = await ctx.prisma.clinic.update({
        data: {
          clinicConcerns: clinicConcerns,
        },
        where: {
          id: input.clinicId,
        },
      })
      return {
        clinicConcerns: clinicConcerns,
        updatedClinic: updatedClinic,
      }
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
  createMany: publicProcedure
    .input(z.object({ clinicId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const reviews = await ctx.prisma.review.createMany({
        data: [
          {
            clinicId: input.clinicId,
            verified: true,
            date: '2023-09-10T11:30:00Z',
            negSentiment: false,
            concernValues: ['General Health'],
            others: '',
            descriptionValues: ['Empathetic', 'Communicative', 'Knowledgeable'],
            reviewContent:
              'My experience at Jimmy Ting Medical Clinic was fantastic. The staff demonstrated great empathy, communication, and knowledge about general health. They provided a thorough examination and made me feel valued as a patient. Highly recommended!',
          },
          {
            clinicId: input.clinicId,
            verified: false,
            date: '2023-10-18T14:45:00Z',
            negSentiment: true,
            concernValues: ['Acne/Hormones'],
            others: '',
            descriptionValues: ['Non-judgemental'],
            reviewContent:
              'Unfortunately, my visit to Jimmy Ting Medical Clinic was disappointing. Despite the staff being non-judgemental, my concerns about acne/hormonal issues, particularly PCOS, were not adequately addressed. Left with unanswered questions and frustration.',
          },
          {
            clinicId: input.clinicId,
            verified: true,
            date: '2023-11-05T09:15:00Z',
            negSentiment: false,
            concernValues: ['General Health', 'Acne/Hormones'],
            others: 'None',
            descriptionValues: ['Knowledgeable', 'Communicative'],
            reviewContent:
              'Jimmy Ting Medical Clinic exceeded my expectations. The team was highly knowledgeable about both general health and acne/hormonal issues. They communicated effectively and addressed my concerns with care. A positive experience overall.',
          },
          {
            clinicId: input.clinicId,
            verified: false,
            date: '2023-12-12T16:00:00Z',
            negSentiment: true,
            concernValues: ['Acne/Hormones'],
            others: '',
            descriptionValues: ['Non-judgemental', 'Empathetic'],
            reviewContent:
              'I was disappointed with the service at Jimmy Ting Medical Clinic. Despite the staff being non-judgemental and empathetic, my concerns about acne/hormonal issues were not properly addressed. It left me feeling uncertain about the care provided.',
          },
          {
            clinicId: input.clinicId,
            verified: true,
            date: '2024-01-20T13:30:00Z',
            negSentiment: false,
            concernValues: ['General Health'],
            others: 'High blood pressure',
            descriptionValues: ['Empathetic', 'Knowledgeable', 'Communicative'],
            reviewContent:
              'Jimmy Ting Medical Clinic is outstanding! The staff was empathetic, knowledgeable, and very communicative about general health. They also addressed my concerns about high blood pressure. I felt well-cared for throughout my visit. Kudos to the team!',
          },
        ],
      })
    }),
})
