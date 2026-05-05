import { Code2, Globe, Grid2X2, Monitor, Terminal } from 'lucide-react'
import { AppCategory } from '../types/category'

const categories: AppCategory[] = [
  { key: 'macos', label: 'macOS Apps', icon: Monitor },
  { key: 'web', label: 'Web Apps', icon: Globe },
  { key: 'developer', label: 'Developer Tools', icon: Code2 },
  { key: 'cli', label: 'CLI Apps', icon: Terminal },
  { key: 'productivity', label: 'Productivity', icon: Grid2X2 },
]

export default categories
