'use client'
import { usePathname } from 'next/navigation'
import { useModule } from './context/ModuleContext'
import { useEffect } from 'react'

export function ModuleDetector() {
  const pathname = usePathname()
  const { setCurrentModule } = useModule()

  useEffect(() => {
    if (pathname.startsWith('/grocery')) setCurrentModule('grocery')
    if (pathname.startsWith('/pharmacy')) setCurrentModule('pharmacy')
    if (pathname.startsWith('/food')) setCurrentModule('food')
  }, [pathname, setCurrentModule])

  return null
}