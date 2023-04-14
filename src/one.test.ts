import { two } from './one'

test('test', () => {
  expect(two()).toBe(123)
})

test('test ifs', () => {
  let number = 0

  if (number === 0) {
    number = 1
  }

  expect(number).toBe(1)
})
