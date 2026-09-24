import { IconCode, IconGlobe, IconGrid, IconMonitor, IconTerminal } from '../../components/icons'
import { AppCategory } from '../types/category'

const categories: AppCategory[] = [
  { key: 'macos', icon: IconMonitor },
  { key: 'web', icon: IconGlobe },
  { key: 'developer', icon: IconCode },
  { key: 'cli', icon: IconTerminal },
  { key: 'productivity', icon: IconGrid },
]

export default categories
