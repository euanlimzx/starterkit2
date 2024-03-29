import { extendTheme } from '@chakra-ui/react'
import { theme as ogpDsTheme } from '@opengovsg/design-system-react'
import { shadows } from './foundations/shadows'
import { layerStyles } from './layerStyles'
import { components } from './components'
import { textStyles } from './foundations/textStyles'
import { colors } from './foundations/colors'
export const theme = extendTheme(ogpDsTheme, {
  colors: colors,
  shadows,
  components: {
    ...ogpDsTheme.components,
    ...components,
  },
  textStyles,
  layerStyles,
})
