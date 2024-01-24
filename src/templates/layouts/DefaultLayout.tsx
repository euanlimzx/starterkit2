import {
  RestrictedFooter,
  RestrictedGovtMasthead,
  Banner,
} from '@opengovsg/design-system-react'
import Head from 'next/head'
import { type ReactNode } from 'react'
import { useEnv } from '~/hooks/useEnv'
import { AppGrid } from '../AppGrid'
import { Box, Button, Divider, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Link from 'next/link'

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
          <Text as="span">
            This is an exploratory prototype that was built for&nbsp;
            <Link href="https://hack.gov.sg/" target="_blank">
              <Text textDecoration={'underline'} as="span">
                OGP’s Hack for Public Good
              </Text>
            </Link>
          </Text>
        </Banner>
        <RestrictedGovtMasthead />

        <Box display={'flex'} justifyContent={'start'} m={'0.5rem'}>
          <Button variant="clear" as={NextLink} href={'/'} color={'black'}>
            AskHer
          </Button>
        </Box>
        <Divider />
        <Box mx={{ base: '0rem', md: '16rem' }}> {children}</Box>
        {/* <Box> {children}</Box>*/}

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
