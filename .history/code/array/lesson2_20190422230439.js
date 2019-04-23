export default (arr) => {
  let dst = []
  let min = Number.MAX_SAFE_INTEGER;
  let result = true
  arr.sort((a,b) => a-b);
  for(let i = 0, il=arr.length,tmp=[]; i<il; i++) {
    tmp.push(arr[i])
    for(let j=i+1;;j++) {
      if(arr[j]===arr[i]){
        tmp.push(arr[i])
      } else {
        min = min < tmp.length?min: tmp.length
        dst.push([].concat(tmp))
        tmp.length = 0;
        i = j;
        break;
      }
    }
  }
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}
