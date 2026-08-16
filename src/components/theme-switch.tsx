import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useT } from '../lib/i18n'

const THEME_KEY = 'burak_theme'

function initialDark(): boolean {
  return document.documentElement.classList.contains('dark')
}

function ThemeSwitch() {
  const t = useT()
  const [dark, setDark] = useState(initialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
    } catch {
      /* private mode: theme still applies for this visit */
    }
  }, [dark])

  const label = dark ? t.nav.themeDark : t.nav.themeLight

  return (
    <button
      type='button'
      className='theme-switch'
      onClick={() => setDark(!dark)}
      title={`${t.nav.themeAria}: ${label}`}
      aria-label={`${t.nav.themeAria}: ${label}`}>
      {dark ? <Moon size={12} aria-hidden='true' /> : <Sun size={12} aria-hidden='true' />}
    </button>
  )
}

export default ThemeSwitch