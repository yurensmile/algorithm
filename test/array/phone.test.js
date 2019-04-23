import telComb from '../../code/array/phone'

test("Phone: 23",() => {
  expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
