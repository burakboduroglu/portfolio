import type { LucideIcon } from 'lucide-react'

export type CategoryKey = 'macos' | 'web' | 'developer' | 'cli' | 'productivity'

export type AppCategory = {
  key: CategoryKey
  icon: LucideIcon
}
