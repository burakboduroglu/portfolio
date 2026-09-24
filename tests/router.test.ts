import { describe, expect, test } from 'bun:test'
import apps from '../src/lib/data/apps'
import { parseRoute, projectPath } from '../src/lib/router'

describe('parseRoute', () => {
  test('home, with or without a trailing slash', () => {
    expect(parseRoute('/')).toEqual({ name: 'home' })
    expect(parseRoute('')).toEqual({ name: 'home' })
    expect(parseRoute('/projects')).toEqual({ name: 'home' })
    expect(parseRoute('/projects/')).toEqual({ name: 'home' })
  })

  test('every project resolves from its own path', () => {
    for (const app of apps) {
      expect(parseRoute(projectPath(app.id))).toEqual({ name: 'project', id: app.id })
      expect(parseRoute(`${projectPath(app.id)}/`)).toEqual({ name: 'project', id: app.id })
    }
  })

  test('the pre-rename dev-notes link still lands on penote', () => {
    expect(parseRoute('/projects/dev-notes')).toEqual({ name: 'project', id: 'penote' })
  })

  test('unknown paths are not found', () => {
    expect(parseRoute('/projects/nope')).toEqual({ name: 'notFound', path: '/projects/nope' })
    expect(parseRoute('/about')).toEqual({ name: 'notFound', path: '/about' })
  })
})
