import { describe, expect, test } from 'bun:test'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import apps from '../src/lib/data/apps'
import screenshots from '../src/lib/data/screenshots'
import { LOCALES } from '../src/lib/i18n/types'

const PUBLIC = resolve(import.meta.dirname, '../public')

/** Pixel size from a WebP header — lossy (VP8), lossless (VP8L) or extended (VP8X) */
function webpSize(file: string): { width: number; height: number } {
  const b = readFileSync(file)
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error(`${file} is not a WebP file`)
  }

  const chunk = b.toString('ascii', 12, 16)
  if (chunk === 'VP8 ') {
    return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
  }
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21)
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
  }
  if (chunk === 'VP8X') {
    return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 }
  }
  throw new Error(`${file}: unknown WebP chunk ${chunk}`)
}

const ids = new Set<string>(apps.map((app) => app.id))

describe('screenshots', () => {
  test('are only listed for projects that exist', () => {
    for (const id of Object.keys(screenshots)) {
      expect(ids.has(id)).toBe(true)
    }
  })

  for (const [id, shots] of Object.entries(screenshots)) {
    // scripts/prerender.ts uses it as the link-preview image
    test(`${id} has a JPEG social preview`, () => {
      expect(existsSync(resolve(PUBLIC, 'screenshots', id, 'og.jpg'))).toBe(true)
    })

    for (const shot of shots ?? []) {
      describe(`${id} ${shot.src}`, () => {
        const file = resolve(PUBLIC, shot.src.slice(1))

        test('file exists under public/', () => {
          expect(existsSync(file)).toBe(true)
        })

        // The gallery reserves the box from these numbers; a mismatch is a
        // layout shift or a stretched image
        test('declared size matches the file', () => {
          expect(webpSize(file)).toEqual({ width: shot.width, height: shot.height })
        })

        test('has alt text in every language', () => {
          for (const locale of LOCALES) {
            expect(shot.alt[locale].trim().length).toBeGreaterThan(0)
          }
        })
      })
    }
  }
})
