import { Text } from '@chakra-ui/react'

const Subheader = ({ children }) => {
  return (
    <Text
      as="span"
      fontSize={{ base: 'md', md: '4xl' }}
      lineHeight={'1.2'}
      letterSpacing={'-0.01em'}
      color={'#F35A2B'}
    >
      {children}
    </Text>
  )
}

export default Subheader
