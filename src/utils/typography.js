import Typography from 'typography'
//import altonTheme from 'typography-theme-alton'
import sutroTheme from 'typography-theme-sutro'
import injectFonts from 'typography-inject-fonts'

const typography = new Typography(sutroTheme)

typography.toString()
typography.injectStyles()
injectFonts(typography)