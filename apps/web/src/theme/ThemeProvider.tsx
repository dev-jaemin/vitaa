import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'

import { ThemeProvider } from '@mui/material'
import { StylesProvider } from '@mui/styles'

import { themeCreator } from './base'

export const ThemeContext = React.createContext((themeName: string) => {
  localStorage.setItem('appTheme', themeName)
})

const ThemeProviderWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme'
  const [themeName, _setThemeName] = useState(curThemeName)
  const theme = themeCreator(themeName)
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  )
}

export default ThemeProviderWrapper
