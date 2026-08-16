import { Code2, Globe, Grid2X2, Monitor, Terminal } from 'lucide-react'
import { AppCategory } from '../types/category'

const categories: AppCategory[] = [
  { key: 'macos', icon: Monitor },
  { key: 'web', icon: Globe },
  { key: 'developer', icon: Code2 },
  { key: 'cli', icon: Terminal },
  { key: 'productivity', icon: Grid2X2 },
]

export default categories
