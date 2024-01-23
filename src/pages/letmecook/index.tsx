import { Box, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <Box
      bgGradient="linear-gradient(90deg, rgba(248,154,144,1) 11%, rgba(255,189,139,1) 96%);"
      h={'80vh'}
    >
      <Box>
        <Stack direction={'row'} py={'2rem'} px={'6rem'}>
          <Box w={'50%'}>
            <Text textStyle={'h2'} fontStyle={'italic'} color={'#F35A2B'}>
              femhealth
            </Text>
          </Box>
          <Box w={'50%'} display={'flex'} justifyContent={'end'}>
            <Stack direction={'row'} spacing={8}>
              <Text textStyle={'subhead-1'} color={'#505050'}>
                health concerns
              </Text>
              <Text textStyle={'subhead-1'} color={'#505050'}>
                search a clinic
              </Text>
              <Text textStyle={'subhead-1'} color={'#505050'}>
                resources
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Box width={'50%'}>
          <Text
            fontWeight={'medium'}
            fontSize={'10xl'}
            px={'5rem'}
            py={'5rem'}
            color={'#F35A2B'}
          >
            empowering your health choices
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
