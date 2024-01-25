import { extendTheme } from '@chakra-ui/react'
import { theme as ogpDsTheme } from '@opengovsg/design-system-react'
import { components } from './components'
import { colors } from './foundations/colors'
import { shadows } from './foundations/shadows'
import { textStyles } from './foundations/textStyles'
import { layerStyles } from './layerStyles'
import '@fontsource-variable/dm-sans'
export const theme = extendTheme(ogpDsTheme, {
  fonts: {
    DMSans: `'DM Sans Variable', sans-serif`,
  },
  colors: colors,
  shadows,
  components: {
    ...ogpDsTheme.components,
    ...components,
  },
  textStyles,
  layerStyles,
})
