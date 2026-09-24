import type { Icon } from '../../components/icons'

export type CategoryKey = 'macos' | 'web' | 'developer' | 'cli' | 'productivity'

export type AppCategory = {
  key: CategoryKey
  icon: Icon
}
