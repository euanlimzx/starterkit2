import { Box, Flex, Text } from '@chakra-ui/react'
import { SkeletonPostList } from '~/components/SkeletonPostList'
import Suspense from '~/components/Suspense'
import {
  ADMIN_NAVBAR_HEIGHT,
  APP_GRID_COLUMN,
  APP_GRID_TEMPLATE_COLUMN,
} from '~/constants/layouts'
import { NewPostBanner, PostList } from '~/features/home/components'
import { type NextPageWithLayout } from '~/lib/types'
import { AppGrid } from '~/templates/AppGrid'
import { AdminLayout } from '~/templates/layouts/AdminLayout'

const Home: NextPageWithLayout = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      position={{ base: 'absolute', sm: 'inherit' }}
      left={{ base: 0, sm: undefined }}
      minH={`calc(100% - ${ADMIN_NAVBAR_HEIGHT})`}
    >
      <Text>
        This page should legit just be for me to write my review <br />
        [TODO] Also need to find out how to "autofill" based on the HAS SMS URL
        [TODO] Route for selecting clinic to give review for / fetch all clinics
        [TODO] Route for actually creating a review
      </Text>
      <AppGrid
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        px={{ base: '1rem', lg: 0 }}
        bg="base.canvas.brand-subtle"
        py="1rem"
      >
        <Box gridColumn={APP_GRID_COLUMN}>
          <NewPostBanner />
        </Box>
      </AppGrid>
      <AppGrid
        flex={1}
        bg="white"
        pb="2.5rem"
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        px={{ base: '1rem', lg: 0 }}
      >
        <Suspense fallback={<SkeletonPostList />}>
          <PostList />
        </Suspense>
      </AppGrid>
    </Flex>
  )
}

Home.getLayout = AdminLayout

export default Home
