import { Box, Stack, Text } from '@chakra-ui/react'
import { Button, Tag } from '@opengovsg/design-system-react'
import Subheader from '~/components/letmecook/Subheader'

const Page = () => {
  return (
    <Box mx={{ base: '2rem', md: '16rem' }} pt={{ base: '2rem', md: '4rem' }}>
      <Stack spacing={{ base: 10, md: 12 }}>
        <Text textStyle={'caption-1'} display={{ base: 'none', md: 'block' }}>
          Cervical cancer / prevention
        </Text>
        <Text
          as="span"
          fontSize={{ base: '5xl', md: '8xl' }}
          lineHeight={'1.2'}
          letterSpacing={'-0.02em'}
          color={'#F35A2B'}
        >
          All about preventing{' '}
          <Text as="span" fontWeight={'semibold'}>
            Cervical Cancer
          </Text>
        </Text>
        <Box>
          <Text fontWeight={'medium'} fontSize={{ base: 'xl' }}>
            This page may be useful if you are any of the following:
          </Text>
          <Stack spacing={2} pt={{ base: '1rem' }}>
            <Tag borderRadius={'1rem'} textColor={'#F35A2B'}>
              Lorem Ipsum
            </Tag>
            <Tag borderRadius={'1rem'} textColor={'#F35A2B'}>
              Lorem Ipsum
            </Tag>
            <Tag borderRadius={'1rem'} textColor={'#F35A2B'}>
              Lorem Ipsum
            </Tag>
          </Stack>
        </Box>
        <Box bg={'#FFF5EB'} p={'1.5rem'}>
          <Text fontWeight={'medium'} fontSize={{ base: 'xl' }}>
            #what's-the-gist?
          </Text>
          <Stack mt={{ md: '0.5rem' }} ml={{ md: '0.5rem' }} spacing={0}>
            <Text>
              •&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing
            </Text>
            <Text>
              •&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing
            </Text>
            <Text>
              •&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing
            </Text>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight={'medium'} fontSize={{ base: 'xl' }}>
            On this page
          </Text>
          <Stack mt={{ base: '0.5rem' }}>
            <Text textDecoration={'underline'} color="blue.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              incidunt?
            </Text>
            <Text textDecoration={'underline'} color="blue.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              incidunt?
            </Text>
            <Text textDecoration={'underline'} color="blue.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              incidunt?
            </Text>
          </Stack>
        </Box>
        <Box>
          <Subheader>
            What is the
            <Text as="span" fontWeight={'semibold'}>
              &nbsp;HPV vaccine&nbsp;
            </Text>
            and how does it prevent Cervical cancer?
          </Subheader>
          <Text mt={{ base: '1rem' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            beatae expedita ea ad ab quae nihil perspiciatis accusamus quasi
            possimus.
          </Text>
        </Box>
        <Box>
          <Subheader>
            This is an example
            <Text as="span" fontWeight={'semibold'}>
              &nbsp;Header
            </Text>
          </Subheader>
          <Stack
            mt={{ base: '1rem' }}
            direction={{ md: 'row' }}
            spacing={{ base: '1rem' }}
          >
            <Box
              color={'brand.primary.500'}
              borderColor={'brand.primary.500'}
              border={'1px'}
              borderRadius={'0.5rem'}
              bg={'#FFF5EB'}
              padding={'1rem'}
              width={'50%'}
              fontSize={{ md: 'lg' }}
            >
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
            </Box>
            <Box
              borderColor={'black'}
              border={'1px'}
              borderRadius={'0.5rem'}
              padding={'1rem'}
              width={'50%'}
            >
              <Text fontSize={{ md: 'lg' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Page
