import { useEffect, useState } from 'react'
import { useT } from '../lib/i18n'
import { IconMoon, IconSun } from './icons'

const THEME_KEY = 'burak_theme'

function initialDark(): boolean {
  return document.documentElement.classList.contains('dark')
}

export function toggleTheme() {
  const isDark = !document.documentElement.classList.contains('dark')
  document.documentElement.classList.toggle('dark', isDark)
  try {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
  } catch {
    /* private mode: theme still applies for this visit */
  }
  window.dispatchEvent(new CustomEvent('theme-change', { detail: isDark }))
  return isDark
}

function ThemeSwitch() {
  const t = useT()
  const [dark, setDark] = useState(initialDark)

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>
      setDark(customEvent.detail ?? document.documentElement.classList.contains('dark'))
    }
    window.addEventListener('theme-change', handleThemeChange)
    return () => window.removeEventListener('theme-change', handleThemeChange)
  }, [])

  const label = dark ? t.nav.themeDark : t.nav.themeLight

  return (
    <button
      type='button'
      className='theme-switch'
      onClick={() => toggleTheme()}
      title={`${t.nav.themeAria}: ${label}`}
      aria-label={`${t.nav.themeAria}: ${label}`}>
      {dark ? <IconMoon /> : <IconSun />}
    </button>
  )
}

export default ThemeSwitch
