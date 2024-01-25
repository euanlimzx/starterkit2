import { Box, Stack, Text } from '@chakra-ui/react'
import { Button, Tag } from '@opengovsg/design-system-react'

const Second = () => {
  return (
    <Box bg="#FFF5EB;" py={'5rem'}>
      <Stack direction={'row'}>
        <Box w="30%"></Box>
        <Box w="70%">
          <Stack spacing={9}>
            <Box fontSize={'2xl'} color={'#F35A2B'}>
              <Text as="span">Browse recommended topics by</Text>
              <Text as="span" fontWeight={'bold'}>
                &nbsp;age group
              </Text>
            </Box>
            <Box>
              <Stack direction="row" spacing={8} align="center">
                <Button
                  variant="link"
                  colorScheme="orange"
                  fontWeight={'bold'}
                  textDecoration={'underline'}
                  textUnderlineOffset={'0.5rem'}
                >
                  Teenagers
                </Button>
                <Button variant="link" colorScheme="orange">
                  20-30s
                </Button>
                <Button variant="link" colorScheme="orange">
                  30-50s
                </Button>
                <Button variant="link" colorScheme="orange">
                  50s+
                </Button>
              </Stack>
            </Box>
            <Text fontWeight={'bold'} fontSize={'lg'} w={'50%'}>
              So you&apos;re a teen. Wanna know if these changes are normal?
            </Text>
            <Text w={'80%'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              eveniet commodi dolorem cumque laudantium facilis eligendi rerum?
              Cum, mollitia. Excepturi, distinctio illo provident quam
              cupiditate ullam eius velit magnam dolore quisquam modi ex sint
              totam saepe laudantium! Labore, vero voluptates!
            </Text>
            <Box w={'90%'}>
              <Stack direction={'row'}>
                <Box
                  bg={'#FFFFFF'}
                  borderRadius={'0.5rem'}
                  width="33%"
                  p={'1em'}
                >
                  <Text
                    color={'#F35A2B'}
                    fontSize={'lg'}
                    fontWeight={'semibold'}
                  >
                    Acne
                  </Text>
                  <Tag size={'xs'} colorScheme="orange" borderRadius={'1rem'}>
                    Subsidy available
                  </Tag>
                  <Text fontSize={'sm'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum aperiam voluptate
                  </Text>
                </Box>
                <Box
                  bg={'#FFFFFF'}
                  borderRadius={'0.5rem'}
                  width="33%"
                  p={'1em'}
                >
                  <Text
                    color={'#F35A2B'}
                    fontSize={'lg'}
                    fontWeight={'semibold'}
                  >
                    Acne
                  </Text>
                  <Tag size={'xs'} colorScheme="orange" borderRadius={'1rem'}>
                    Subsidy available
                  </Tag>
                  <Text fontSize={'sm'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum aperiam voluptate
                  </Text>
                </Box>
                <Box
                  bg={'#FFFFFF'}
                  borderRadius={'0.5rem'}
                  width="33%"
                  p={'1em'}
                >
                  <Text
                    color={'#F35A2B'}
                    fontSize={'lg'}
                    fontWeight={'semibold'}
                  >
                    Acne
                  </Text>
                  <Tag size={'xs'} colorScheme="orange" borderRadius={'1rem'}>
                    Subsidy available
                  </Tag>
                  <Text fontSize={'sm'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum aperiam voluptate
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Second
