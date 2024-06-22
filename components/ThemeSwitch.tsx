'use client'

import useIsMounted from 'hooks/useIsMounted'
import { useTheme } from 'next-themes'
import { ThemeDarkIcon } from './social-icons/ThemeDarkIcon'
import { ThemeLightIcon } from './social-icons/ThemeLightIcon'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()
  if (!isMounted) return null

  return (
    <button
      title="Toggle Dark Mode"
      aria-label="Toggle Dark Mode"
      className="hover-underline-animation inline-flex h-10 w-10 flex-row p-2 text-inherit"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </button>
  )
}
