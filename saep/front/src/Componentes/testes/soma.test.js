import { expect, test } from 'vitest'
import { soma } from './soma.js'

test('Deve somar 1 + 2, e ser igual a 3', () => {
  expect(soma(2, 2)).toBe(3)
})