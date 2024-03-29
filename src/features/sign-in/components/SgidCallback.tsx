import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { FullscreenSpinner } from '~/components/FullscreenSpinner'
import { useLoginState } from '~/features/auth'
import { trpc } from '~/utils/trpc'

/**
 * This component is responsible for handling the callback from the SGID login.
 */
export const SgidCallback = (): JSX.Element => {
  const { setHasLoginStateFlag } = useLoginState()

  const router = useRouter()
  const utils = trpc.useContext()

  const {
    query: { code, state },
  } = router

  const [{ redirectUrl }] = trpc.auth.sgid.callback.useSuspenseQuery(
    { code: String(code), state: String(state) },
    { staleTime: Infinity }
  )

  useEffect(() => {
    setHasLoginStateFlag()
    void utils.me.get.invalidate()
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.replace(redirectUrl)
  }, [redirectUrl, router, setHasLoginStateFlag, utils.me.get])

  return <FullscreenSpinner />
}
