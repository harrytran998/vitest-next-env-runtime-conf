import { beforeAll, expect, test, vi } from 'vitest'
import { sum } from '../utils/sum'

const fn = vi.fn()

beforeAll(() => {
  vi.stubGlobal(
    'getConfig',
    fn(() => ({
      publicRuntimeConfig: {
        NODE_ENV: 'development',
        ENV: 'development',
      },
    })),
  )

  fn('getConfig', {
    publicRuntimeConfig: {
      NODE_ENV: 'development',
      ENV: 'development',
    },
  })
})

test('home', () => {
  expect(sum(1, 2)).toBe(-1)
})
