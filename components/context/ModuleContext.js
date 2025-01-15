// context/ModuleContext.js
'use client'
import { createContext, useContext, useState } from 'react'

const ModuleContext = createContext()

export function ModuleProvider({ children }) {
  const [currentModule, setCurrentModule] = useState(null)

  return (
    <ModuleContext.Provider value={{ currentModule, setCurrentModule }}>
      {children}
    </ModuleContext.Provider>
  )
}

export function useModule() {
  return useContext(ModuleContext)
}