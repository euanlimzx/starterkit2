import { type PrismaClient } from '@prisma/client'
import { generateUsername } from '../../me/me.service'
import { type SgidSessionProfile } from './sgid.utils'
import { AccountProvider } from '../auth.constants'

export const upsertSgidAccountAndUser = async ({
  prisma,
  email,
  name,
  sub,
}: {
  prisma: PrismaClient
  email: NonNullable<SgidSessionProfile['email']>

  name: SgidSessionProfile['name']
  sub: SgidSessionProfile['sub']
}) => {
  return await prisma.$transaction(async (tx) => {
    // Create user from email
    const user = await tx.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
        emailVerified: new Date(),
        name,
        username: generateUsername(email),
      },
    })

    // Backwards compatibility -- update username if it is not set
    if (!user.username) {
      await tx.user.update({
        where: { id: user.id },
        data: { username: generateUsername(email) },
      })
    }

    // Link user to account
    await prisma.accounts.upsert({
      where: {
        provider_providerAccountId: {
          provider: AccountProvider.Sgid,
          providerAccountId: sub,
        },
      },
      update: {},
      create: {
        provider: AccountProvider.Sgid,
        providerAccountId: sub,
        userId: user.id,
      },
    })

    return user
  })
}
