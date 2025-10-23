'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Mode = 'light' | 'dark' | 'system'

interface ThemeStyles {
  light?: Record<string, unknown>
  dark?: Record<string, unknown>
}

interface Theme {
  styles?: ThemeStyles
}

interface Settings {
  mode: Mode
  theme: Theme
}

interface SettingsContextProps {
  settings: Settings
  updateSettings: (settings: Settings) => void
}

const defaultSettings: Settings = {
  mode: 'light',
  theme: {
    styles: { light: {}, dark: {} },
  },
}

export const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultSettings,
  updateSettings: () => {},
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings)

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
