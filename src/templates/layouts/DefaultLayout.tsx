import {
  RestrictedFooter,
  RestrictedGovtMasthead,
  Banner,
} from '@opengovsg/design-system-react'
import Head from 'next/head'
import { type ReactNode } from 'react'
import { useEnv } from '~/hooks/useEnv'
import { AppGrid } from '../AppGrid'
import { Box, Button, Divider } from '@chakra-ui/react'
import NextLink from 'next/link'

type DefaultLayoutProps = { children: ReactNode }

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { env } = useEnv()

  return (
    <>
      <Head>
        <title>{env.NEXT_PUBLIC_APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner variant="error" size={'sm'}>
          Hackathon prototype, not a real product!
        </Banner>
        <RestrictedGovtMasthead />

        <Box display={'flex'} justifyContent={'start'} m={'0.5rem'}>
          <Button variant="clear" as={NextLink} href={'/'} color={'black'}>
            Femhealth
          </Button>
        </Box>
        <Divider />
        <Box mx={{ base: '0rem', md: '18rem' }}> {children}</Box>

        <AppGrid bg="#FFFFFFF" px="1.5rem">
          <Box gridColumn={{ base: '1 / -1', md: '2 / 12' }}>
            <RestrictedFooter
              // This component can only be used if this is an application created by OGP.
              containerProps={{
                px: 0,
                bg: '#FFFFFFF',
              }}
              appName=""
              appLink="/"
            />
          </Box>
        </AppGrid>
      </main>
    </>
  )
}
