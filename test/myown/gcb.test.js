import toGcb from '../../code/myown/gcb'

test('[15,21,27]:3', () => {
  expect(toGcb([15,21,27])).toEqual(3)
})
