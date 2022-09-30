import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useTheme as useNextTheme } from 'next-themes'

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme()
  console.log(resolvedTheme)
  const theme = useContext(StyledThemeContext)
  return { isDark: resolvedTheme === 'dark', theme, setTheme }
}

export default useTheme
