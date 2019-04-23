// export default (arr) => {
//   let dst = []
//   let min = Number.MAX_SAFE_INTEGER;
//   let result = true
//   arr.sort((a,b) => a-b);
//   for(let i = 0, il=arr.length,tmp=[]; i<il; i++) {
//     tmp.push(arr[i])
//     for(let j=i+1;;j++) {
//       if(arr[j]===arr[i]){
//         tmp.push(arr[i])
//       } else {
//         min = min < tmp.length?min: tmp.length
//         dst.push([].concat(tmp))
//         tmp.length = 0;
//         i = j;
//         break;
//       }
//     }
//   }
//   dst.every(item => {
//     if (item.length % min !== 0) {
//       result = false
//       return false
//     }
//   })
//   return result
// }
var hasGroupsSizeX = function(deck) {
  const MaxCommonDivisor = (a, b)=>{
      if(b===0)return a;
      return MaxCommonDivisor(b, a%b);
  }
  var hash = deck.reduce((pre, cur)=>{
      if(!pre[cur])  pre[cur] = 1;
      else  pre[cur]++;           
      return pre;
  }, {});
  var hashData = Object.values(hash);
  var flag = hashData[0];
  return !hashData.some((item, index)=>{       
      return MaxCommonDivisor(item, flag)==1;
  });
};
hasGroupsSizeX([1,2,3,4,4,3,2,1])