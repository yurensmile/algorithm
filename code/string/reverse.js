// export default (s) => {
//   return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }
// export default (s) => {
//   return s.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
// }
export default (s) => {
  return s.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}
