/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc'
import { authRouter } from './auth/auth.router'
import { clinicRouter } from './clinic/clinic.router'
import { reviewRouter } from './review/review.router'
import { meRouter } from './me/me.router'
import { profileRouter } from './profile/profile.router'
import { postRouter } from './post/post.router'
import { threadRouter } from './thread/thread.router'
import { storageRouter } from './storage/storage.router'
export const appRouter = router({
  review: reviewRouter,
  clinic: clinicRouter,
  // healthcheck: publicProcedure.query(() => 'yay!'),
  me: meRouter,
  auth: authRouter,
  profile: profileRouter,
  post: postRouter,
  thread: threadRouter,
  storage: storageRouter,
})

export type AppRouter = typeof appRouter
