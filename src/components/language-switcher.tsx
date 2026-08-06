import { LOCALES, localeLabels, useLocale, useT } from '../../lib/i18n'

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const t = useT()

  return (
    <div className='lang-switch' role='group' aria-label={t.nav.languageAria}>
      {LOCALES.map((option) => (
        <button
          key={option}
          type='button'
          onClick={() => setLocale(option)}
          title={localeLabels[option]}
          aria-current={option === locale ? 'true' : undefined}>
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
